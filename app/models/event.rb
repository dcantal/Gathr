class Event < ApplicationRecord
    validates :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, presence: true
    validates :private, inclusion: {in: [true, false]}

    has_one_attached :photo
    
    belongs_to :group,
        class_name: :Group,
        primary_key: :id,
        foreign_key: :group_id

    has_many :rsvps,
        dependent: :destroy,
        class_name: :Rsvp,
        primary_key: :id,
        foreign_key: :event_id

    has_many :attendees,
        through: :rsvps,
        source: :attendee

    def attendee_count
        self.attendees.count
    end

    def organizer_rsvps
        self.rsvps.select{|rsvp| rsvp.organizer}
    end

    def organizers
        org = []
        self.rsvps.each do |rsvp|
            if rsvp.organizer
                org << rsvp.user_id
            end
        end
        return org
    end
end
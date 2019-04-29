class Group < ApplicationRecord
    validates :name, :hometown, :description, presence: true
    validates :private, inclusion: {in: [true, false]}

    has_many :memberships,
        dependent: :destroy,
        class_name: :Membership,
        primary_key: :id,
        foreign_key: :group_id

    has_many :members,
        through: :memberships,
        source: :member

    has_many :events,
        dependent: :destroy,
        class_name: :Event,
        primary_key: :id,
        foreign_key: :group_id

    has_one_attached :photo

    def member_count
        self.members.count
    end

    def organizer_memberships
        self.memberships.select{|membership| membership.organizer }
    end

    def organizers
        org = []
        self.memberships.each do |membership|
            if membership.organizer
                org << membership.user_id
            end
        end
        return org
    end

    def past_events
        self.events.select {|event| event.end_time < Time.now }.sort_by {|event| event.start_time}.reverse
    end

    def current_events
        self.events.select do |event|
            event.end_time > Time.now && 
            event.start_time < Time.now
        end
    end

    def upcoming_events
        self.events.select {|event| event.start_time > Time.now }.sort_by {|event| event.start_time }
    end

end
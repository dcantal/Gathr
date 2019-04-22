class Rsvp < ApplicationRecord
    validates :user_id, :event_id, presence: true 
    validates :organizer, inclusion: {in: [true, false]}

    belongs_to :attendee,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    belongs_to :event,
        class_name: :Event,
        primary_key: :id,
        foreign_key: :event_id

end
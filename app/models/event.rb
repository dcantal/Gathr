class Event < ApplicationRecord
    validates :group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, presence: true
    validates :private, inclusion: {in: [true, false]}

    belongs_to :group,
        class_name: :Group,
        primary_key: :id,
        foreign_key: :group_id

    
end
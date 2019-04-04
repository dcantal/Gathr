class Membership < ApplicationRecord
    validates :user_id, :group_id, presence: true 
    validates :organizer, inclusion: {in: [true, false]}

    belongs_to :member,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    belongs_to :group,
        class_name: :Group,
        primary_key: :id,
        foreign_key: :group_id

end
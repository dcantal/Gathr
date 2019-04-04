class Group < ApplicationRecord
    validates :name, :hometown, :description, presence: true
    validates :private, inclusion: {in: [true, false]}

    has_many :memberships,
        class_name: :Membership,
        primary_key: :id,
        foreign_key: :group_id

    has_many :members,
        through: :memberships,
        source: :member

    def member_count
        self.members.count
    end

    # def organizers
    #     self.membersships.select{|membership| membership.organizer }
    # end

end
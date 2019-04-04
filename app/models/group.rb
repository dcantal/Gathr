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

    has_one_attached :photo

    def member_count
        self.members.count
    end

    def organizer_memberships
        self.memberships.select{|membership| membership.organizer }
    end

    # has_many :organizers,
    #     through: :organizer_memberships
    #     source: :members

    def organizers
        org = []
        self.memberships.each do |membership|
            if membership.organizer
                org << membership.user_id
            end
        end
        return org
    end

    # def organizer_info
    #     org_info = []
    #     self.organizers
    # end

end
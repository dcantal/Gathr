class Group < ApplicationRecord
    validates :name, :hometown, :description, presence: true
    validates :private, inclusion: {in: [true, false]}

end
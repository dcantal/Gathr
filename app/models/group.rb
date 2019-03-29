class Group < ApplicationRecord
    validates :name, :hometown, :description, :private, presence: true

end
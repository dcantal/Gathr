class CreateMembershipsPartTwo < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.references :user, index: true, foreign_key: true
      t.references :group, index: true, foreign_key: true
      t.boolean :organizer, null: false, default: false

      t.timestamps
    end
  end
end

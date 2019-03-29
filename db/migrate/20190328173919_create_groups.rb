class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.string :hometown, null: false
      t.text :description, null: false
      t.boolean :private, null: false, default: false
      
      t.timestamps

    end

    add_index :groups, :name
    add_index :groups, :hometown
  end
end

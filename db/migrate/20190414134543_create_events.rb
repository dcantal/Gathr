class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.references :group, index: true, foreign_key: true
      t.string :name, null: false
      t.text :description, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.boolean :private, null: false, default: false

      t.timestamps

    end

    add_index :events, :name
    add_index :events, :start_time
    add_index :events, :end_time
    add_index :events, :latitude
    add_index :events, :longitude
  end
end

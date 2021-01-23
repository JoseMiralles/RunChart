class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.string :route, null: false
      t.float :start_lat
      t.float :start_lng

      t.timestamps
    end

    add_index :routes, :creator_id
    add_index :routes, :start_lat
    add_index :routes, :start_lng

  end
end

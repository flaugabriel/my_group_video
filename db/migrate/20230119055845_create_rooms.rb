class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :code
      t.integer :status
      t.references :media_record

      t.timestamps
    end
  end
end

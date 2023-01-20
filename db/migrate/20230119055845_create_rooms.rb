class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :status
      t.reference :media_record

      t.timestamps
    end
  end
end

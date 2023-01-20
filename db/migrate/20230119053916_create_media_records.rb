class CreateMediaRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :media_records do |t|
      t.string :code
      t.string :title
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

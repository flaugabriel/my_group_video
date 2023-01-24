class CreateMediaVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :media_videos do |t|
      t.string :code_access
      t.string :title
      t.string :description
      t.references :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end

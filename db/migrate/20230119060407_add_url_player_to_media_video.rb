class AddUrlPlayerToMediaVideo < ActiveRecord::Migration[6.1]
  def change
    add_column :media_videos, :url_player, :string
  end
end

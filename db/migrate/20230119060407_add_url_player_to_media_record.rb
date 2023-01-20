class AddUrlPlayerToMediaRecord < ActiveRecord::Migration[6.1]
  def change
    add_column :media_records, :url_player, :string
  end
end

class Api::V1::UserRoomSerializer < ActiveModel::Serializer
  attributes :id, :code_access, :title, :description, :video, :url_player

  def code_access
    object.code_access || ''
  end

  def title
    object.title || ''
  end

  def description
    object.description || ''
  end

  def video
    object.media_video.video.attached? ? rails_blob_url(object.media_video.video) : false
  end

  def url_player
    object.media_video.url_player || false
  end

  def room
    {
      id: object.room.id,
      name: object.room.name,
      create_by: object.room.user_rooms(&:admin).trust.first.user.nickname || ''
    }
  end
end
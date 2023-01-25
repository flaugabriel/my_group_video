class Api::V1::RoomSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :media_video, :status, :create_by

  def id
    object.id || 0
  end

  def status
    object.status || ''
  end

  def name
    object.name || ''
  end

  def create_by
    object.user_rooms(&:admin).trust.first.user.nickname || ''
  end

  def created_at
    object.created_at || ''
  end

  def media_video
    {
      code_access: object.media_video.code_access || '',
      title: object.media_video.title || '',
      description: object.media_video.description || '',
      video: object.media_video.video.attached? ? rails_blob_url(object.media_video.video) : false,
      url_player: object.media_video.url_player || false
    }
  end
end
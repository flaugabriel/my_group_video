class MediaRecord < ApplicationRecord
  has_one_attached :video

  validates_presence_of :title, on: :create, message: 'não pode ficar em vazio!'
  validate :url_video_type, on: :create
  validate :video_type, on: :create

  belongs_to :user, required: true
  has_many :rooms, required: true

  def video_url
    Rails.application.routes.url_helpers.url_for(video) if video.attached?
  end
  
  private

  def url_video_type
    return if url_video_type.include?('https://')

    add.errors(:base, 'url invalida!')
  end

  def video_type
    return if url_video_type.include?('https://')

    add.errors(:base, 'Formato de video não suportado para upload tente (mp4, WMV e AVI)!')
  end

  private

  def video_file
    return unless video.present?

    return video.blob.content_type.include?('jpeg') || video.blob.content_type.include?('png') || video.blob.content_type.include?('jpg')

    errors.add(:video, 'formato permitido apenas jpeg, png ou jpg')
  end
end

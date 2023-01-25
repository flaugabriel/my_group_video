class MediaVideo < ApplicationRecord
  has_one_attached :video

  validates_presence_of :title, on: :create, message: 'não pode ficar em vazio!'
  validate :url_video_type, unless: :url_video_presence?
  validate :video_type, unless: :video_presence?

  has_one :room, inverse_of: :media_video

  before_save :add_code_access

  def video_url
    Rails.application.routes.url_helpers.url_for(video) if video.attached?
  end

  def url_video_presence?
    url_player.present?
  end
  
  def video_presence?
    video.present?
  end

  private

  def add_code_access
    self.code_access = Digest::SHA1.hexdigest([Time.now, rand].join)[0..6].upcase
  end

  def url_video_type
    return if url_player.include?('https://')

    errors.add(:base, 'url invalida!')
  end

  private

  def video_type
    return unless video.present?

    return video.blob.content_type.include?('mp4')

    errors.add(:video, 'formato permitido apenas mp4')
  end
end

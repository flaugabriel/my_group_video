class UserRoom < ApplicationRecord
  attr_accessor :code_access
  validates_uniqueness_of :user, message: 'deve ser unico!'

  belongs_to :room
  belongs_to :user

  after_destroy :put_admin 

  private 

  def put_admin
    unless room.user_rooms(&:admin).map { | user_room | user_room.admin? }.include?(true)
      if room.user_rooms.first
        room.user_rooms.first.update(admin: true)
      else
        room.media_video.delete
        room.delete
      end 
    end
  end
end

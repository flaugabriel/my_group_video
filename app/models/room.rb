class Room < ApplicationRecord
  belongs_to :media_record
  has_many :user_rooms
end

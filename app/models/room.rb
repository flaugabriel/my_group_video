class Room < ApplicationRecord
  enum status: %w[public private]
  
  belongs_to :media_record
  has_many :user_rooms
end

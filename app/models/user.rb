class User < ApplicationRecord
  has_many :user_rooms
  has_many :media_records
end

class User < ApplicationRecord
  has_many :user_rooms

  validates_presence_of :nickname, message: 'não pode ficar em branco'
  validates_uniqueness_of :nickname, on: :create, message: 'deve ser unico'
end

class Room < ApplicationRecord
  $user = nil
  attr_accessor :user
  enum status: %w[public_room private_room]

  validate :user_nickname_presence, on: :create
  validate :user_nickname_exist, on: :create
  validates_presence_of :name, on: :create, message: 'não pode fica em branco'

  has_one :media_video, dependent: :destroy, inverse_of: :room
  has_many :user_rooms, dependent: :destroy, inverse_of: :room

  accepts_nested_attributes_for :media_video, :user_rooms, allow_destroy: true

  before_save :build_user, if: :new_record?
  after_save :user_room_build

  private

  def user_nickname_presence
    return if user[:nickname].present? || user[:nickname].blank?

    errors.add(:base, 'Apelido obrigatorio!')
  end

  def user_nickname_exist
    return unless User.where(nickname: user[:nickname]).present?

    errors.add(:base, 'Já existe este apelido')
  end

  def build_user
    $user = User.create(user)
  end

  def user_room_build
    return UserRoom.create(user_id: $user.id, room_id: self.id, admin: 1) if $user.nickname.present?
  end
end

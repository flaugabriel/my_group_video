class Api::V1::UserRoomSerializer < ActiveModel::Serializer
  attributes :id, :user, :room, :created_at

  def id
    object.id || 0
  end

  def admin
    object.admin ? 'Administrador' : '' || ''
  end

  def user
    object.user.nickname || ''
  end

  def room
    object.room.name || ''
  end

  def created_at
    object.created_at || ''
  end
end
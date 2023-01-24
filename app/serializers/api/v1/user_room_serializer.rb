class Api::V1::UserRoomSerializer < ActiveModel::Serializer
  attributes :id, :user, :admin, :date_add

  def id
    object.id || 0
  end

  def admin
    object.admin ? 'Administrador' : 'Convidado' || ''
  end

  def user
    object.user.nickname || ''
  end

  def date_add
    object.created_at.to_s|| ''
  end
end
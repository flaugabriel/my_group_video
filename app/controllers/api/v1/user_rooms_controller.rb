class Api::V1::UserRoomsController < ApplicationController

  def show_users
    rooms = Room.order('updated_at desc')

    return json_error_response('Não foi encontrado salas', :not_found) unless rooms.present?

    render json: rooms, each_serializer: Api::V1::UserRoomSerializer, status: :ok
  end

  def add_user
    @user_room = UserRoom.new(user_room_params)

    if @user_room.save
      render json: @user_room, each_serializer: Api::V1::UserRoomSerializer, status: :ok
    else
      render json: @user_room.errors.full_messages, status: :unprocessable_entity
    end
  end

  def remove_user
    return json_error_response('Não foi encontrado este Usuário', :not_found) unless @user_room.present?

    @user_room.destroy

    json_error_response('Usuário da sala removido', :ok)
  end

  private

    def set_user_room
      @user_room = UserRoom.find_by(id: params[:id])
      return json_error_response('Não foi encontrado este usuário', :not_found) unless @user_room.present?

      @user_room
    end

    def user_room_params
      params.require(:user_room).permit(:admin, :room_id, :user_id)
    end
end

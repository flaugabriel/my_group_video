class Api::V1::RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]

  def index
    rooms = Room.where(status: :public_room).order('updated_at desc')

    return json_error_response('Não foi encontrado salas', :not_found) unless rooms.present?

    render json: rooms, each_serializer: Api::V1::RoomSerializer, status: :ok
  end

  def show
    return json_error_response('Não foi encontrado esta sala', :not_found) unless @room.present?

    render json: @room, each_serializer: Api::V1::RoomSerializer, status: :ok
  end

  def create
    @room = Room.new(room_params)

    if @room.save
      render json: @room, each_serializer: Api::V1::RoomSerializer, status: :ok
    else
      render json: @room.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @room.update(room_params)
      render json: @room, each_serializer: Api::V1::RoomSerializer, status: :ok
    else
      json_error_response(@room.errors, :unprocessable_entity)
    end
  end

  def destroy
    return json_error_response('Não foi encontrado esta sala', :not_found) unless @room.present?

    delete_room_context

    json_error_response('Sala apagada', :ok)
  end


  private

    def delete_room_context
      users = @room.user_rooms(&:user)
      @room.media_video.delete
      @room.user_rooms.delete_all
      users.delete_all
      @room.delete
    end

    def set_room
      @room = Room.find_by(id: params[:id])
      return json_error_response('Não foi encontrado esta sala', :not_found) unless @room.present?

      @room
    end

    def room_params
      params.require(:room).permit(:name, :status, {user: [:nickname], media_video_attributes: [:code_access, :title, :description, :video, :url_player]})
    end
end

class Api::V1::UserRoomsController < ApplicationController
  before_action :set_user_room_by_room, only: :show_users
  before_action :set_user_room, only: :remove_user

  # GET /user_rooms/1
  def show_users
    render json: @user_room
  end

  # POST /user_rooms
  def create
    @user_room = UserRoom.new(user_room_params)

    if @user_room.save
      render json: @user_room, status: :created, location: @user_room
    else
      render json: @user_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_rooms/1
  def remove_user
    @user_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_room_by_room
      @user_room = UserRoom.where(room_id: params[:room_id])
    end

    def set_user_room
      @user_room = UserRoom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_room_params
      params.require(:user_room).permit(:admin, :room_id, :user_id)
    end
end

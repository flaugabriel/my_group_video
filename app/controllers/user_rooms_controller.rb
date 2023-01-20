class UserRoomsController < ApplicationController
  before_action :set_user_room, only: [:show, :update, :destroy]

  # GET /user_rooms
  def index
    @user_rooms = UserRoom.all

    render json: @user_rooms
  end

  # GET /user_rooms/1
  def show
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

  # PATCH/PUT /user_rooms/1
  def update
    if @user_room.update(user_room_params)
      render json: @user_room
    else
      render json: @user_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_rooms/1
  def destroy
    @user_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_room
      @user_room = UserRoom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_room_params
      params.require(:user_room).permit(:admin, :room_id, :user_id)
    end
end

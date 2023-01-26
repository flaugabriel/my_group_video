module UserRooms
  class CodeAccessService < ApplicationService
    def initialize(params)
      @data = { data: {}, status: 401, user_room: {}}
      @media_video = fetch_room(params).take.media_video
      @user = fetch_user(params)
      @params = params
    end

    def call
      if @user.errors.present?
        @data[:data] =  "Nickname #{@user.errors.messages[:nickname].first}"
        @data[:status] = 404
      elsif check_code_access
        @data[:data] = 'Codigo valido!'
        @data[:user_room] = add_at_room
        @data[:status] = 202
      else
        @data[:data] = 'Codigo invalido!'
      end
      @data
    end

    private 

    def check_code_access
      @media_video.code_access == @params[:code_access]
    end

    def fetch_room(params)
      Room.where(id: params[:room_id])
    end

    def fetch_user(params)
      User.create(nickname: params[:user][:nickname])
    end

    def add_at_room
      UserRoom.create(room_id: @params[:room_id], user_id: @user.id, admin: 0)
    end
  end
end
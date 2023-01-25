module UserRooms
  class CodeAccessService < ApplicationService
    def initialize(params)
      @data = { data: {}, status: 401 }
      @media_video = fetch_room(params).take.media_video
      @user = fetch_user(params)
      @params = params
    end

    def call
      if !@user.present?
        @data[:data] = 'Usuário não encontrada!'
        @data[:status] = 404
      elsif !@media_video.present?
        @data[:data] = 'Sala não encontrada!'
        @data[:status] = 404
      elsif check_code_access
        @data[:data] = 'Codigo valido!'
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
      User.find(params[:user_id])
    end
  end
end
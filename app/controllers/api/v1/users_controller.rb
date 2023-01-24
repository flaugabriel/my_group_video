class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {id: @user.id, nickname: @user.nickname}, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: {id: @user.id, nickname: @user.nickname}, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    return json_error_response('Não foi encontrado este Usuário', :not_found) unless @user.present?

    delete_user_context

    json_error_response('Usuário removido', :ok)
  end


  private

    def delete_user_context
      @user.user_rooms(&:user).delete
      @user.delete
    end

    def is_admin_any_room

    end

    def set_user
      @user = User.find_by(id: params[:id])
      return json_error_response('Não foi encontrado este usuário', :not_found) unless @user.present?

      @user
    end

    def user_params
      params.require(:user).permit(:nickname)
    end
end

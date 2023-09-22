module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        render 'api/users/create'
      else
        render json: {
          success: false
        }
      end
    end

    private

    def user_params
      puts params.to_yaml
      params.require(:user).permit(:email, :password, :username)
    end
  end
end

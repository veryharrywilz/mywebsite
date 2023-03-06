class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        user = User.create(username: params[:username], password: params[:password], email: params[:email])
        # @user.password = params[:password]
        # @user.save!
        session[:username] = user.username
        render json: user, status: :created 
    end

    def show
        user = User.find_by(username: session[:username])
        render json: user, status: :ok
    end


end

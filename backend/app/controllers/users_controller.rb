class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    # rescue_from ActiveRecord::RecordInvalid, with: :handle_unprocessable_entity

    def create
        user = User.create!(username: params[:username], password: params[:password], email: params[:email])
        # @user.password = params[:password]
        # @user.save!
        session[:username] = user.username
        render json: user, status: :ok 
    end

    def show
        user = User.find_by(username: session[:username])
        render json: user, status: :ok
    end
    
    # def handle_unprocessable_entity(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: 422
    # end


end

class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:username] = user.username
            render json: user, status: :ok
        else
            render json: "Error"
            return user
        end
    end

    def destroy
        user = User.find_by(username: session[:username])
        session.delete :username
        render json: user, status: :gone
    end
    


end
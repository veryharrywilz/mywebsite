

class BlogsController < ApplicationController

    require 'date'

    
    skip_before_action :verify_authenticity_token
    def index 
        blogs = Blog.all.sort {|a,b| b <=> a}
        render json: blogs 
    end

    def create
        newBlog = Blog.create(title: params[:title], content: params[:content], image: params[:image], post_date: DateTime.now)
        render json: newBlog, status: :created 
    end

    private

    def blog_params
        params.permit(:title, :content, :image)
    end


end

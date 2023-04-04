

class BlogsController < ApplicationController

    require 'date'

    
    skip_before_action :verify_authenticity_token
    def index 
        blogs = Blog.all.sort {|a,b| b <=> a}
        render json: blogs, include: [:comments], status: :ok 
    end

    def create
        newBlog = Blog.create(title: params[:title], content: params[:content], image: params[:image], post_date: DateTime.now)
        render json: newBlog, status: :created 
    end

    def search
        blogs = Blog.where(category: params[:search])
        render json: blogs, status: :ok 
    end

    def latest_blog
        lastBlog = Blog.last
        render json: lastBlog, status: :ok 
    end

    private

    def blog_params
        params.permit(:title, :content, :image)
    end

    def search_params
        params.permit(:search)
    end


end

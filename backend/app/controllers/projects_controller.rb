class ProjectsController < ApplicationController

    def index
       projs = Project.all
       render json: projs, status: :ok 
    end

end

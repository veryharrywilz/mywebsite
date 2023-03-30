class ProjectsController < ApplicationController

    def index
       projs = Project.all
       render json: projs, status: :ok 
    end

    def latest_project
        lastProj = Project.last 
        render json: lastProj, status: :ok 
    end

end

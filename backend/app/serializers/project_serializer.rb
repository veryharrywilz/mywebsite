class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :description, :github, :date_started, :date_finished, :language1, :language2
end

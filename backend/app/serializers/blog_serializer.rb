class BlogSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :image, :post_date, :created_at
end

class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :synopsis
  belongs_to :user
end

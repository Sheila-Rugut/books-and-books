class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :synopsis
end

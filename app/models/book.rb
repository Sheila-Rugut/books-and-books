class Book < ApplicationRecord
   belongs_to :user

    validates :title, presence: true
    validates :synopsis, length: { maximum: 300 }

end

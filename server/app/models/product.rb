class Product < ApplicationRecord
  belongs_to :store
  has_many :cart_items
  has_many :carts, through: :cart_items

  has_one_attached :photo
end

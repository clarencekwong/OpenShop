class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :status

  has_many :products
  has_many :items
end

class CartItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart

  def total_price
    product.cost.to_i * quantity.to_i
  end
end

class User < ApplicationRecord
  has_many :carts
  validates :email, uniqueness: true
	has_secure_password
end

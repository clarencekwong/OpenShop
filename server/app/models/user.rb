class User < ApplicationRecord
  has_many :orders
  validates :email, uniqueness: true
	has_secure_password
end

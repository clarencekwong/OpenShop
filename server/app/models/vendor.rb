class Vendor < ApplicationRecord
  has_one :store
  validates :email, uniqueness: true
  validates :company, uniqueness: true
  has_secure_password
end

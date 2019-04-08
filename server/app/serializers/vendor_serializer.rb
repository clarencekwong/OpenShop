class VendorSerializer < ActiveModel::Serializer
  attributes :id
  has_one :store
end

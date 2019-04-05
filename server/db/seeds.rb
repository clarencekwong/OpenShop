# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Vendor.create({company:"facebook", email:"f", password:"123"})
Vendor.create({company:"amazon", email:"a", password:"123"})
Vendor.create({company:"netflix", email:"n", password:"123"})
Vendor.create({company:"google", email:"g", password:"123"})


User.create({name:"cust", email:"123", password:"123"})

Store.create({name:"applebee",vendor_id: 1})
Store.create({name:"applebee",vendor_id: 2})
Store.create({name:"applebee",vendor_id: 3})
Store.create({name:"applebee",vendor_id: 4})



# Product.create({name:"table",description:"blah",sku:"Q1W2W3E4RR5R5T5",cost:5.99,inventory: 100, store_id: 1})

p "things created"

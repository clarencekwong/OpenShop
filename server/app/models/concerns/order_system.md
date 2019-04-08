Model:
Order -> has_many :order_items, has_many :products, through: order_items, belongs_to :user, status: false
Order items -> belongs_to :user, :order

When logged in as a user -> check for existing orders, if not Order.create({user_id: state})

Store order_id in localstorage on log in

Click on buy button -> creates order_item -> POST to order_item controller

submit order -> status: true

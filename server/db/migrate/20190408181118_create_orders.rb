class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.boolean :status, :default => false
      t.timestamps
    end
  end
end

class Api::V1::OrderItemsController < ApplicationController
  before_action :find_orderitem, only: [:update, :show]
  def index
    @orderitems = OrderItem.all
    render json: @orderitems
  end

  def show
    render json: @orderitem
  end

  def create
    @orderitem = OrderItem.new(orderitem_params)
    if @orderitem.save
      render json: @orderitem, status: :accepted
    else
      render json: { errors: @orderitem.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @orderitem.update(orderitem_params)
    if @orderitem.save
      render json: @orderitem, status: :accepted
    else
      render json: { errors: @orderitem.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def orderitem_params
    params.permit(:name, :description, :sku, :cost, :inventory, :orderitem_id, :photo)
  end

  def find_orderitem
    @orderitem = OrderItem.find(params[:id])
  end
end

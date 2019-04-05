class Api::V1::ProductsController < ApplicationController
  before_action :find_product, only: [:update, :show]
  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product, status: :accepted
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @product.update(product_params)
    if @product.save
      render json: @product, status: :accepted
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def product_params
    params.permit(:name, :description, :sku, :cost, :inventory, :store_id, :photo)
  end

  def find_product
    @product = Product.find(params[:id])
  end
end

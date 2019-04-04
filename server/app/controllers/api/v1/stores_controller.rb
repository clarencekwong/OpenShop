class Api::V1::StoresController < ApplicationController
  before_action :find_store, only: [:update]
  def index
    @stores = Store.all
    render json: @stores
  end

  def create
    @store = Store.new(store_params)
    if @store.save
      render json: @store, status: :accepted
    else
      render json: { errors: @store.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @store.update(store_params)
    if @store.save
      render json: @store, status: :accepted
    else
      render json: { errors: @store.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def store_params
    params.permit(:name, :description, :sku, :cost, :inventory, :store_id, :photo)
  end

  def find_store
    @store = Store.find(params[:id])
  end
end

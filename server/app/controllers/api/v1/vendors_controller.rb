class Api::V1::VendorsController < ApplicationController
  before_action :find_vendor, only: [:update]
  def index
    @vendors = Vendor.all
    render json: @vendors
  end

  def create
    @vendor = Vendor.new(vendor_params)
    if @vendor.save
      render json: @vendor, status: :accepted
    else
      render json: { errors: @vendor.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    @vendor.update(vendor_params)
    if @vendor.save
      render json: @vendor, status: :accepted
    else
      render json: { errors: @vendor.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def vendor_params
    params.permit(:company, :email, :password)
  end

  def find_vendor
    @vendor = Vendor.find(params[:id])
  end
end

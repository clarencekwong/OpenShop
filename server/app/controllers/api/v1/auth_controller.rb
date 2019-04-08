class Api::V1::AuthController < ApplicationController
  def userlogin
    user = User.find_by(email: params[:email])
    session[:user_id] = user.id
    if user && user.authenticate(params[:password])
      jwt = encode_token({user_id: user.id})
      render json: {user: UserSerializer.new(user), jwt: jwt}
    else
      render json: {errors: "Please enter the correct email and password!"}
    end
  end

  def vendorlogin
    user = Vendor.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      jwt = encode_token({vendor_id: user.id})
      render json: {user: VendorSerializer.new(user), jwt: jwt}
    else
      render json: {errors: "Please enter the correct email and password!"}
    end
  end

  def auto_login
    user = curr_user
    if user
      render json: user
    else
      render json: {errors: "I dont think so"}
    end
  end
end

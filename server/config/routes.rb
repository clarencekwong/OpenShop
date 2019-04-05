Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :update, :create, :show]
      resources :stores, only: [:index, :update, :create]
      resources :users, only: [:index, :update, :create]
      resources :vendors, only: [:index, :update, :create]
      post '/userlogin', to: 'auth#userlogin'
      get '/userlogin', to: 'auth#auto_login'
      post '/vendorlogin', to: 'auth#vendorlogin'
      get '/vendorlogin', to: 'auth#auto_login'
    end
  end
end

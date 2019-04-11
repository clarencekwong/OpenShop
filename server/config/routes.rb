Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :update, :create, :show]
      resources :stores, only: [:index, :update, :create, :show]
      resources :users, only: [:index, :update, :create, :show]
      resources :vendors, only: [:index, :update, :create, :show]
      resources :orders, only: [:index, :update, :create, :show]
      resources :items, only: [:index, :update, :create]
      post '/userlogin', to: 'auth#userlogin'
      get '/userlogin', to: 'auth#auto_userlogin'
      post '/vendorlogin', to: 'auth#vendorlogin'
      get '/vendorlogin', to: 'auth#auto_vendorlogin'
    end
  end
end

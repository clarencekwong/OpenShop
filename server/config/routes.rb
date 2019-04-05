Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :update, :create]
      resources :stores, only: [:index, :update, :create]
      resources :users, only: [:index, :update, :create]
      resources :vendors, only: [:index, :update, :create]
    end
  end
end

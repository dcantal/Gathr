Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :groups, except: [:new] do
      resources :events, only: [:create, :destroy]
      resources :users, only: [:index]
      resources :memberships, only: [:create, :index, :destroy]
    end
    resources :events, only: [:index, :show, :update]
  end
end

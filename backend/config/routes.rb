Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :blogs, only: [:index, :create]
  resources :sessions, only: [:create, :destroy] 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end

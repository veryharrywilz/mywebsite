Rails.application.routes.draw do
  resources :comments
  resources :projects, only: [:index]
  resources :users, only: [:show, :create]
  resources :blogs, only: [:index, :create]
  resources :sessions, only: [:create, :destroy] 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/me", to: "users#show"
  get "/featuredblog", to: "blogs#latest_blog"
  get "/featuredproject", to: "projects#latest_project"

  post "/searchblogs", to: "blogs#search"
  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  
end

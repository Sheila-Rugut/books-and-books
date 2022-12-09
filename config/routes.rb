Rails.application.routes.draw do
  
  resources :reviews
  resources :books
  resources :users
  get 'sessions/create'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/books", to: "books#index"
 post "/books", to: "books#create"
 delete "books", to: "books#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

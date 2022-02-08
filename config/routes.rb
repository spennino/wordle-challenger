Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :games
  end
end

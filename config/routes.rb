Rails.application.routes.draw do
  devise_for :users, :controllers => {registrations: 'registrations'}
  resources :recipes
  resources :cookbook, only: [:show]

  # root 'recipes#index'
  root 'cookbook#show'
end

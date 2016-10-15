Rails.application.routes.draw do
  devise_for :users, :controllers => {registrations: 'registrations'}
  resources :recipes
  resources :ingredients
  # resource :recipe do
  #   get :random_recipe
  # end

  root 'cookbook#show'
end

Rails.application.routes.draw do
  devise_for :users, :controllers => {registrations: 'registrations'}
  resources :recipes
  # resource :recipe do
  #   get :random_recipe
  # end

  # root 'recipes#index'
  root 'cookbook#show'
end

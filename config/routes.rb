Rails.application.routes.draw do
  devise_for :users, :controllers => {registrations: 'registrations'}
  resources :recipes

  root 'recipes#index'
end

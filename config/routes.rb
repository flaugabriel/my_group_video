Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user_rooms
      resources :rooms
      resources :media_records
      resources :users 
    end
  end
end

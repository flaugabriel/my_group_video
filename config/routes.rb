Rails.application.routes.draw do
  resources :user_rooms
  resources :rooms
  resources :media_records
  namespace :api do
    namespace :v1 do
      resources :users do
        collection do
        end
      end
    end
  end
end

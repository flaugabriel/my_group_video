Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user_rooms do 
        collection do 
          post 'add_user', to: 'user_rooms#add_user'
          get 'show_users/:room_id', to: 'user_rooms#show_users'
          delete 'remove_user/:id', to: 'user_rooms#remove_user'
        end
      end
      resources :rooms
      resources :media_videos
      resources :users 
    end
  end
end

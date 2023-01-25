require 'rails_helper'

describe 'show all users in room' do
  before do
    post '/api/v1/rooms/', params:
    {
      room: {
          name: Faker::Hipster.word,
          status: 'private_room',
          user: {
            nickname: Faker::Name.name
          },
          media_video_attributes: {
            title: Faker::Movie.title,
            description:  Faker::Lorem.paragraph,
            url_player: 'https://www.youtube.com/watch?v=9nZ5x3MgB3w'
        }
      }
    }
    @code_access = json['media_video']['code_access']
    @room_id = json['id']
  end

  before do
    post '/api/v1/users', params: {
      user: { nickname: Faker::Name.name }
    }

    @user_id = json['id']
  end

  before do
    post '/api/v1/user_rooms/add_user', params: {
      user_room: {
        code_access: @code_access,
        room_id: @room_id,
        user_id: @user_id
      }
    }
  end

  before do
    get "/api/v1/user_rooms/show_users/#{@room_id}"
  end

  it 'check if all users is present in room' do
    expect(response.status).to eq(200)
    expect(json.length).to eq(2)
  end
end
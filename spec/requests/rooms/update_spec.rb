require 'rails_helper'

describe 'PUT update room' do
  before do
    post '/api/v1/rooms', params:
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
  end

  before do
    put "/api/v1/rooms/#{json['id']}", params: { room: { name: Faker::Hipster.word, status: "public_room" } }
  end

  it 'updates a question' do
    expect(response.status).to eq(200)
    expect(json['id'].present?).to eq(true)
  end
end
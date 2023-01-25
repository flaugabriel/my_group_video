require 'rails_helper'

RSpec.describe 'Room', type: :request do
  describe 'POST /create' do
    context 'with valid parameters' do
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
        delete "/api/v1/rooms/#{json['id']}"
      end

      it 'returns status code 204' do
        expect(json['status']).to eq('ok')
      end
    end
  end
end
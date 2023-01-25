# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Room', type: :request do
  describe 'POST create with url' do
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

      it 'returns a created status' do
        expect(response.status).to eq(200)
        expect(json['name'].present?).to eq(true)
      end
    end

    context 'with invalid parameters' do
      before do
        post '/api/v1/rooms', params:
        {
          room: {
              name: '',
              status: '',
              user: {
                  nickname: ''
              },
              media_video_attributes: {
                  title: '',
                  description: '',
                  url_player: ''
              }
          }
      }
      end

      it 'returns a unprocessable entity status 422' do
        expect(response.status).to eq(422)
        expect(json.length).to eq(3)
      end
    end
  end
end
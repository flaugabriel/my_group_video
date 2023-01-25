# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Room', type: :request do
  describe 'POST create with video' do
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
                video: Rack::Test::UploadedFile.new('spec/files/videoteste.mp4', 'video/mp4'),
                url_player: 'https://'
            }
          }
        }
      end

      it 'returns a created status' do
        expect(response.status).to eq(200)
        expect(json['media_video']['video'].present?).to eq(true)
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
                  video: nil,
                  url_player: 'https://'
              }
          }
      }
      end

      it 'returns a unprocessable entity status 422' do
        expect(response.status).to eq(422)
        expect(json.length).to eq(2)
      end
    end
  end
end

# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Room', type: :request do
  describe 'POST /create' do
    context 'with valid parameters' do
      before do
        post '/api/v1/rooms', params:
        {
          room: {
              name: 'Sala 1',
              status: 'private_room',
              user: {
                  nickname: 'flaugabriel'
              },
              media_video_attributes: {
                  title: 'Up cat',
                  description: 'Lorem ipsu its a lorem lorem its a ipsum',
                  url_player: 'https://www.youtube.com/watch?v=9nZ5x3MgB3w'
              }
          }
      }
      end

      it 'returns a created status' do
        expect(response.status).to eq(200)
        expect(json['name']).to eq('Sala 1')
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
        expect(json.length).to eq(2)
      end
    end
  end
end
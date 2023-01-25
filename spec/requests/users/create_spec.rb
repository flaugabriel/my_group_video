# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe 'POST /create' do
    context 'with valid parameters' do
      let(:user) { FactoryBot.create(:user) }

      before do
        post '/api/v1/users', params: { user: { nickname: Faker::Name.name } }
      end

      it 'returns a created status' do
        expect(response.status).to eq(200)
        expect(json['id'].present?).to eq(true)
      end
    end

    context 'with invalid parameters' do
      before do
        post '/api/v1/users', params: { user: { nickname: '' } }
      end

      it 'returns a unprocessable entity status 422' do
        expect(response.status).to eq(422)
        expect(json['nickname'].to_sentence).to eq('não pode ficar em branco')
      end
    end
  end
end
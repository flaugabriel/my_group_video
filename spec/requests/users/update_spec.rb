# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe 'POST /create' do
    context 'with valid parameters' do
      let(:user) { FactoryBot.create(:user) }

      before do
        put "/api/v1/users/#{user.id}", params: { user: { nickname: Faker::Name.name } }
      end

      it 'returns a updated' do
        expect(response.status).to eq(200)
        expect(json['id'].present?).to eq(true)
      end
    end
  end
end
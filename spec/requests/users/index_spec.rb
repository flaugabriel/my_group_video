# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe '# GET index' do
    context 'with valid params' do
      before 'build users' do
        FactoryBot.create_list(:user, 100)
      end

      before do
        get '/api/v1/users'
      end


      it { expect(response.status).to eq(200) }

      it 'when have list of users' do
        expect(json.length).to eq(100)
      end
    end
  end
end
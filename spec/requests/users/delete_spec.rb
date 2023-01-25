require 'rails_helper'

RSpec.describe 'User', type: :request do
  describe "DELETE /destroy" do
    let!(:user) { FactoryBot.create(:user) }

    before do
      delete "/api/v1/users/#{user.id}"
    end

    it 'returns status code 204' do
      expect(json['status']).to eq('ok')
      expect(response).to have_http_status(200)
      expect(json['messenger']).to eq('Usuário removido')
    end
  end
end
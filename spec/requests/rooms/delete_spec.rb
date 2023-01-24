require 'rails_helper'

RSpec.describe 'Room', type: :request do
  describe "DELETE /destroy" do
    let!(:room) { FactoryBot.create(:room) }

    before do
      delete "/api/v1/rooms/#{room.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
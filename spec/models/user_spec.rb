

# frozen_string_literal: true
require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { FactoryBot.create(:user) }

  it 'all params is valid' do
    expect(user).to be_valid
  end

  describe 'validations' do 
    subject { FactoryBot.create(:user) }
    it { should validate_presence_of(:nickname) }
  end
end
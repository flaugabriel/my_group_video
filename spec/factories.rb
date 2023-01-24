FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
  end

  factory :room do
    name { Faker::Hipster.word }
    status { 'private_room' }
    visualizations { 0 }
  end

  factory :user_room do 
    user {FactoryBot.create(:user)}
    room {FactoryBot.create(:room)}
    admin { true }
  end

  factory :media_video do 
    code { "T3ST35"}
    title { Faker::Movie.title }
    description { Faker::Lorem.paragraph}
    url_video { "https://www.youtube.com/watch?v=9nZ5x3MgB3w"}
    video { Rack::Test::UploadedFile.new('spec/files/videoteste.mp4', 'video/mp4') }

    user {FactoryBot.create(:user)}
    room {FactoryBot.create(:room)}
  end
end
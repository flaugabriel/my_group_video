FactoryBot.define do
  factory :user do
    nickname { Faker::Name.name }
  end

  factory :room do
    name { Faker::Hipster.word }
    status { 'private_room' }
  end

  factory :user_room do 
    user {FactoryBot.create(:user)}
    room {FactoryBot.create(:room)}
    admin { true }
  end

  factory :media_video do 
    code_access { "T3ST35"}
    title { Faker::Movie.title }
    description { Faker::Lorem.paragraph}
    url_video { 'https://www.youtube.com/watch?v=9nZ5x3MgB3w' }
    video { Rack::Test::UploadedFile.new('spec/files/videoteste.mp4', 'video/mp4') }

    room {FactoryBot.create(:room)}
  end

  factory :all do 
    room { FactoryBot.create(:room) }
    user { FactoryBot.create(:user) }
    user_room { FactoryBot.create(:user_room, {user_id: user.id, room_id: room.id}) }
    media_video { FactoryBot.create(:media_video, {room_id: room.id}) }
  end
end
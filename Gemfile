source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'rails', '~> 6.1.4', '>= 6.1.4.1'
gem 'active_model_serializers', '~> 0.10.0'
gem 'pg', '~> 1.1'
gem 'i18n'
gem 'puma', '~> 5.0'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'rack-cors'

group :development, :test do
  gem 'rspec-rails', '~> 3.6'
  gem 'database_cleaner'
  gem 'debug', platforms: %i[ mri mingw x64_mingw ]
  gem 'shoulda-matchers', require: false
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'listen', '~> 3.3'
  gem 'spring'
  gem 'rubocop-rails'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

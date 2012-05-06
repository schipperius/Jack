source 'https://rubygems.org'
  gem 'pg', '0.12.2'
  gem "faker", "~> 1.0.1"
  gem 'rails', '3.2.2'
  gem 'jquery-rails', '2.0.0'
  gem "will_paginate", "~> 3.0.3"
  gem "bootstrap-will_paginate", "~> 0.0.7"
  gem "acts-as-taggable-on", "~> 2.2.2"
  gem "thin", "~> 1.3.1"
  gem "heroku", "~> 2.21.2"

group :assets do
  gem 'sass-rails',   '3.2.4'
  gem 'coffee-rails', '3.2.2'
  gem 'uglifier', '1.2.3'
  gem "bootstrap-sass", "~> 2.0.1"
  gem "compass-rails", "~> 1.0.1"
end

group :development, :test do
  gem 'pg', '0.12.2'
  gem "taps", "~> 0.3.23"
  gem "factory_girl_rails", "~> 3.2.0"
  gem 'rspec-rails', '~> 2.9.0'
  gem "foreman", "~> 0.40.0"
  gem 'guard-spork', '0.3.2'
  gem "guard-livereload", "~> 0.4.2"
  gem 'guard-rspec', '0.5.5'
  gem 'guard-cucumber'
end

group :test do
  gem 'capybara', '1.1.2'
  gem 'database_cleaner'
# gem 'rb-fsevent', '0.4.3.1', :require => false
# does not seem to work with heroku db:push
  gem "growl", "~> 1.0.3"
  gem 'ruby_gntp' # needed for Heroku
  gem 'spork', '0.9.0'
  gem "cucumber-rails", "~> 1.0", require: false
end

group :production do
  gem 'pg', '0.12.2'
  gem "rufus-scheduler", "~> 2.0.16"
end

namespace :db do
  desc "Erase and fill database"
  task :populate => :environment do
    require 'faker'

    Rake::Task['db:reset'].invoke

    # Create Articles for test user
    25.times do |c|
      article = Article.create!(
        :title => Faker::Lorem.sentence(word_count = 1), 
        :introduction => Faker::Lorem.paragraph(sentence_count = 5), 
        :description => Faker::Lorem.paragraph(sentence_count = 10), 
        :position => rand(25-1) + 1, 
        :published_at => (rand(30-1)+1).days.ago.to_date, 
        :footnotes => Faker::Lorem.paragraph(sentence_count = 5), 
        :comments_count => rand(9-1) + 1)
      end

    # Create Comments for test articles
    25.times do |c|
      comment = Comment.create!(
        :name => Faker::Lorem.sentence(word_count = 1), 
        :content => Faker::Lorem.paragraph(sentence_count = 2))
      end

    end
  end
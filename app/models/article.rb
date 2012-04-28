class Article < ActiveRecord::Base

  scope :recent, order('position DESC')

  def long_title
    "#{title} - #{published_at}"
  end

  def previous
    self.class.where("position < ?", position).order("position desc").first
  end

  def next
    self.class.where("position > ?", position).order("position").first
  end

end

class Article < ActiveRecord::Base

  scope :recent, order('position DESC')

  validates :title, :introduction, :description, :footnotes, presence: true
  validates :title, uniqueness: true

  def long_title
    "#{title} - #{published_at}"
  end

  def previous
    self.class.where("position < ?", position).order("position desc").first
  end

  def next
    self.class.where("position > ?", position).order("position").first
  end

  def last_published?
    self == self.class.published.last
  end

  def published?
    published_at <= Time.zone.now
  end

end

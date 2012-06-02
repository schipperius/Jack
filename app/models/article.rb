class Article < ActiveRecord::Base

  # => Paperclip gem, image upload
  has_attached_file :image, :styles => { :small => "200x150>"}

  validates_attachment_presence :image
  validates_attachment_size :image, :less_than => 5.megabytes
  validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/png']
  
  # => 
  has_many :comments
  scope :recent, order('position DESC')

  validates :title, :introduction, :description, :footnotes, presence: true
  validates :title, uniqueness: true

  # => Methods for Article
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

class Article < ActiveRecord::Base
  has_attached_file :image, 
  :styles => { :thumb => "100x100>", 
               :small => "200x150>", 
               :medium => "300x225>",
               :large => "340x255>" }, 
  :url => "/assets/article-images/:id/:style/:basename.:extension",
  :path => ":rails_root/public/assets/article-images/:id/:style/:basename.:extension"

  has_many :comments

  # Named Scopes
  scope :published, lambda { where("published_at <= ?", Time.zone.now) }
  scope :recent, order('position DESC')
  
  # Validations on Article Model
  validates_attachment_presence :image
  validates_attachment_size :image, 
  :less_than => 5.megabytes
  validates_attachment_content_type :image, 
  :content_type => ['image/jpeg', 'image/png']
  validates_presence_of :published_at, :title
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

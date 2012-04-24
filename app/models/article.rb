class Article < ActiveRecord::Base

  scope :recent, order('position DESC')

  def previous
    self.class.where("position < ?", position).order("position desc").first
  end

  def next
    self.class.where("position > ?", position).order("position").first
  end

end

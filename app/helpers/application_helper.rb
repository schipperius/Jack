module ApplicationHelper
  def logo
    image_tag("title.png", :alt => "Book of Jack", :class => "round")
  end
end

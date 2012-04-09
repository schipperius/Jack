class AboutController < ApplicationController

  after_filter { |c| c.cache_page }

  layout "about"

  def about
    @title = "About"
  end

end

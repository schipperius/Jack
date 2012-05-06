class AboutController < ApplicationController

  after_filter { |c| c.cache_page }

  layout "application"

  def about
    @title = "About"
  end

end

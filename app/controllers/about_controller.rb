class AboutController < ApplicationController

  layout "no_aside"

  def about
    @title = "About"
  end

end

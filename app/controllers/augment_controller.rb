class AugmentController < ApplicationController

  layout "no_logo_aside"

  def maps
    @title = "Maps"
  end

  def galleries
    @title = "Galleries"
  end

  def integrate
    @title = "Integrate"
  end

end

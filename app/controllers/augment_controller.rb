class AugmentController < ApplicationController

  layout "augment"

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

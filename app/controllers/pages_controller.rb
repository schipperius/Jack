class PagesController < ApplicationController

  def author
    @title = "Author"
  end

  def bibli
    @title = "Bibli"
  end

  def colophon
    @title = "Colophon"
  end

  def forward
    @title = "Forward"
  end

  def preface
    @title = "Preface"
  end

end

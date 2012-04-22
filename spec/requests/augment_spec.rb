require 'spec_helper'

describe "Augment" do

  describe "galleries page" do
    it "should have the content 'Galleries'" do
      visit '/galleries'
      page.should have_content('Galleries')
    end
  end
  
  describe "integrate page" do
    it "should have the content 'Integrate'" do
      visit '/integrate'
      page.should have_content('Integrate')
    end
  end

  describe "maps page" do
    it "should have the content 'Maps'" do
      visit '/maps'
      page.should have_content('Maps')
    end
  end

end

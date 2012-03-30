require 'spec_helper'

describe "About" do

  describe "About page" do
    it "should have the content 'About'" do
      visit '/about'
      page.should have_content('About')
    end
  end

end
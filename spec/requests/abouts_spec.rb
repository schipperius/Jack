require 'spec_helper'

describe "Abouts" do
  describe "About page" do
    it "should have the content 'About'" do
      visit '/about'
      about.should have_content('About')
    end
  end
end

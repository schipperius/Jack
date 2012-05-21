require 'spec_helper'

describe "Colophons" do
  describe "GET /colophons" do
    it "works! (now write some real specs)" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get colophons_path
      response.status.should be(200)
    end
  end
end

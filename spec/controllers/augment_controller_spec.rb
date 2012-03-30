require 'spec_helper'

describe AugmentController do
  render_views

  describe "GET 'galleries'" do
    it "should be successful" do
      get 'galleries'
      response.should be_success
    end
  end

  describe "GET 'integrate'" do
    it "should be successful" do
      get 'integrate'
      response.should be_success
    end
  end

  describe "GET 'maps'" do
    it "should be successful" do
      get 'maps'
      response.should be_success
    end
  end

end
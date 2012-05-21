require "spec_helper"

describe ColophonsController do
  describe "routing" do

    it "routes to #index" do
      get("/colophons").should route_to("colophons#index")
    end

    it "routes to #new" do
      get("/colophons/new").should route_to("colophons#new")
    end

    it "routes to #show" do
      get("/colophons/1").should route_to("colophons#show", :id => "1")
    end

    it "routes to #edit" do
      get("/colophons/1/edit").should route_to("colophons#edit", :id => "1")
    end

    it "routes to #create" do
      post("/colophons").should route_to("colophons#create")
    end

    it "routes to #update" do
      put("/colophons/1").should route_to("colophons#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/colophons/1").should route_to("colophons#destroy", :id => "1")
    end

  end
end

require 'spec_helper'

describe "colophons/index" do
  before(:each) do
    assign(:colophons, [
      stub_model(Colophon,
        :position => 1,
        :permalink => "Permalink",
        :name => "Name",
        :description => "MyText"
      ),
      stub_model(Colophon,
        :position => 1,
        :permalink => "Permalink",
        :name => "Name",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of colophons" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Permalink".to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end

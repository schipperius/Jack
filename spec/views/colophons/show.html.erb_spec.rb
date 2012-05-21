require 'spec_helper'

describe "colophons/show" do
  before(:each) do
    @colophon = assign(:colophon, stub_model(Colophon,
      :position => 1,
      :permalink => "Permalink",
      :name => "Name",
      :description => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Permalink/)
    rendered.should match(/Name/)
    rendered.should match(/MyText/)
  end
end

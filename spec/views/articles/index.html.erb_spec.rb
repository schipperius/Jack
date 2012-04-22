require 'spec_helper'

describe "articles/index" do
  before(:each) do
    assign(:articles, [
      stub_model(Article,
        :title => "Title",
        :introduction => "MyText",
        :description => "MyText"
      ),
      stub_model(Article,
        :title => "Title",
        :introduction => "MyText",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of articles" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 0
    assert_select "tr>td", :text => "MyText".to_s, :count => 0
    assert_select "tr>td", :text => "MyText".to_s, :count => 0
  end
end

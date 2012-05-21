require 'spec_helper'

describe "colophons/edit" do
  before(:each) do
    @colophon = assign(:colophon, stub_model(Colophon,
      :position => 1,
      :permalink => "MyString",
      :name => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit colophon form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => colophons_path(@colophon), :method => "post" do
      assert_select "input#colophon_position", :name => "colophon[position]"
      assert_select "input#colophon_permalink", :name => "colophon[permalink]"
      assert_select "input#colophon_name", :name => "colophon[name]"
      assert_select "textarea#colophon_description", :name => "colophon[description]"
    end
  end
end

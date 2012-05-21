class AddTitleImageToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :title_image, :text
  end
end

class AddDetailsToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :position, :integer

    add_column :articles, :published_at, :datetime

    add_column :articles, :comments_count, :integer

    add_column :articles, :footnotes, :text

  end
end

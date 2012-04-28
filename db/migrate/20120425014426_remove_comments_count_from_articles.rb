class RemoveCommentsCountFromArticles < ActiveRecord::Migration
  def up
    remove_column :articles, :comments_count
      end

  def down
    add_column :articles, :comments_count, :integer
  end
end

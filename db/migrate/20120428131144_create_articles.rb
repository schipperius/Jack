class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :introduction
      t.text :description
      t.integer :position
      t.datetime :published_at
      t.text :footnotes
      t.integer :comments_count

      t.timestamps
    end
  end
end

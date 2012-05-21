class CreateColophons < ActiveRecord::Migration
  def change
    create_table :colophons do |t|
      t.integer :position
      t.string :permalink
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end

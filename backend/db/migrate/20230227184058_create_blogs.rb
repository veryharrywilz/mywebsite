class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.text :content
      t.string :title
      t.string :image
      t.datetime :post_date

      t.timestamps
    end
  end
end

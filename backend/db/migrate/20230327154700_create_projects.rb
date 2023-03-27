class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :link
      t.string :description
      t.string :github
      t.string :date_started
      t.string :date_finished
      t.string :language1
      t.string :language2

      t.timestamps
    end
  end
end

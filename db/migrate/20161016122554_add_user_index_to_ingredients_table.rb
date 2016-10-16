class AddUserIndexToIngredientsTable < ActiveRecord::Migration
  def up
    add_column :ingredients, :user_id, :integer
    add_foreign_key :ingredients, :users
  end

  def down
    remove_foreign_key :ingredients, :users
    remove_column :ingredients, :user_id
  end
end

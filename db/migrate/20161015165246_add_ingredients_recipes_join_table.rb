class AddIngredientsRecipesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :ingredients_recipes, :id => false do |t|
      t.integer :ingredient_id
      t.integer :recipe_id
    end
  end

  def self.down
    drop_table :ingredients_recipes
  end
end

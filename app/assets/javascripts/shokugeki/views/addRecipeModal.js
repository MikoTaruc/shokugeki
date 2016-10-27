var NewRecipeModal = Backbone.Marionette.ItemView.extend({
  template: "#recipe-add-modal",
  ui: {
    "name": "#recipe-name",
    "ingredients": "#ingredients",
    "ingredientWrapper": "#add-ingredients-wrapper",
    "directions": "#directions",
    "add": "#save",
    "addIngredient": "#add-ingredient",
    "close": "#close"
  },

  events: {
    "click @ui.add": "add",
    "click @ui.addIngredient": "addIngredient",
    "click @ui.close": "resetFields"
  },

  add: function() {
    var name = $(this.ui.name).val();
    var directions = $(this.ui.directions).val();
    var ingredients = [];
    _.each($('.ingredient-input'), function(i){
      ingredients.push($(i).val());
    });

    var recipe = new Recipe({
      directions: directions,
      ingredients: ingredients,
      name: name
    });

    recipe.save();
    Shokugeki.myRecipes.fetch();
    this.resetFields();
  },

  addIngredient: function() {
    var ingredientInput = "<input type='text' class='ingredient-input'></input>";
    var newElement = $(this.ui.ingredientWrapper).append(ingredientInput);
    $('.ingredient-input').focus();
  },

  resetFields: function() {
    $(this.ui.name).val("");
    $(this.ui.directions).val("");

    _.each($('.ingredient-input'), function(i){
      $(i).val("");
      $(i).remove();
    });
  }
});

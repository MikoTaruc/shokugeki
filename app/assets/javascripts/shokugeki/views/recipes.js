var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe"
  },

  events: {
    "click @ui.addButton": "addRecipe",
  },

  onRender: function(){
    this.collection.on('sync', function(){
      $('.recipe-list').isotope({
        itemSelector: '.single-recipe',
        layoutMode: 'fitRows'
      });
    });
  },

  addRecipe: function(){
    $('#add-modal').modal('show');
  }
});

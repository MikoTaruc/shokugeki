var RecipesView = Backbone.Marionette.CompositeView.extend({
  childView: RecipeView,
  className: "recipe-list container",
  template: "#recipe-list-template",
  ui: {
    "addButton": "#add-recipe"
  },

  events: {
    "click @ui.addButton": "addRecipe",
  },

  attachHtml: function(collectionView, childView, index){

    $('#all-recipes').append(childView.el);
  },

  onRender: function(){
    this.collection.on('sync', function(){
      $('#all-recipes').isotope({
        itemSelector: '.single-recipe',
        layoutMode: 'fitRows'
      });
    });
  },

  addRecipe: function(){
    $('#add-modal').modal('show');
  }
});

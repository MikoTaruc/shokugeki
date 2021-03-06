class RecipesController < ApplicationController
  respond_to :json
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!

  # GET /recipes.json
  def index
    @recipes = Recipe.all
    # This is for when backbone happens
    respond_with @recipes
  end

  # GET /recipes/1
  # GET /recipes/1.json
  def show
    respond_with @recipe
  end

  # GET /recipes/new
  def new
    @recipe = current_user.recipes.build
  end

  # GET /recipes/1/edit
  def edit
  end

  # POST /recipes
  # POST /recipes.json
  def create
    @recipe = current_user.recipes.build(recipe_params)

    if @recipe.save
      update_ingredients
      respond_with @recipe
    else
      render :json => { :errors => @recipe.errors }, :status => 422
    end
  end

  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.html { redirect_to @recipe, notice: 'Recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.html { render :edit }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def update_ingredients
      # Handle exception
      ingredients = []
      params[:ingredients].each do |ingredient|
        if !current_user.ingredients.exists?({:name => ingredient})
          ingredients << {:name => ingredient, :user_id => current_user.id}
        else
          @recipe.ingredients << current_user.ingredients.where({:name => ingredient})
        end
      end

      @recipe.ingredients.create(ingredients)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      params.require(:recipe).permit(:name, :directions, "ingredients")
    end
end

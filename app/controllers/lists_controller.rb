class ListsController < ApplicationController
  def index
    @movies = Movie.all
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
    @movies = @list.movies
    @bookmarks = @list.bookmarks.includes(:movie)
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_path(@list)
    else render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
  end

  def destroy
      @list = List.find(params[:id])
      @list.destroy

    redirect_to lists_path, status: :see_other
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end

end

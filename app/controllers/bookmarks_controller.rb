class BookmarksController < ApplicationController
  #foundation for form
  def new
    @bookmark = Bookmark.new(list_id: params[:list_id])
    @movies = Movie.all
    @list = List.find(params[:list_id])
  end

  # params for the form
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @list = List.find(params[:list_id])
    @bookmark.list = @list
    if @bookmark.save
      redirect_to list_path(@list)
    else
      @movies = Movie.all
      render :new
    end
  end

  def destroy
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:movie_id, :list_id, :comment)
  end
end

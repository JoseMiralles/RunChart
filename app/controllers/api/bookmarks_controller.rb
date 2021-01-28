class Api::BookmarksController < ApplicationController
  def index
    user = User.find(params[:user_id])
    @routes = user.bookmarked_routes
    render "api/routes/index"
  end

  def create
    @bookmark = Bookmark.new(
      {user_id: current_user.id, route_id: params.require(:route_id)})

    if @bookmark.save
      render json: @bookmark
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark.find(params[:id])

    # if @bookmark.user_id != current_user.id
    #   render json: "You are not the owner!"
    # end

    if @bookmark.destroy
      render "true"
    else
      render json @bookmark.errors.full_messages, status: 422
    end
  end

  # Expects :id to be the id of a Route, not a Bookmark.
  def show
    @bookmark = Bookmark.find_by(user_id: current_user.id, route_id: params[:id])
    if @bookmark
      render json: "true"
    else
      render json: "false"
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :route_id)
  end

end

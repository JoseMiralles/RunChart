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

  # Expects :id to be the id of the Route to be unbookmarked.
  def destroy
    @bookmark = Bookmark.find_by(user_id: current_user.id, route_id: params[:id])

    # Check if the current user is the owner of the bookmark.
    # if @bookmark.user_id != current_user.id
    #   render json: "Denied"
    # end

    if @bookmark.destroy
      render json: @bookmark
    else
      render json @bookmark.errors.full_messages, status: 422
    end
  end

  # Expects :id to be the id of a Route, not a Bookmark.
  def show
    @bookmark = Bookmark.find_by(user_id: current_user.id, route_id: params[:id])
    if @bookmark
      render json: @bookmark
    else
      render json: "false"
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :route_id)
  end

end

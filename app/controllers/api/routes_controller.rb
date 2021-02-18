class Api::RoutesController < ApplicationController

    before_action :require_logged_in, except: :show

    def create
        @route = Route.new(route_params);

        if @route.save
            render "api/routes/show"
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def show
        @route = Route.find(params[:id])
        render "api/routes/show"
    end

    def update
        @route = Route.find(params[:id]);

        if @route.creator_id != current_user.id
            render json: ["UNAUTHORIZED"];
            return
        end

        if @route.update(route_params)
            render "api/routes/show"
        else
            render json: @route.errors.full_messages, status: 422
        end
    end

    def index
        @routes
        if (route_filters)
            @routes = Route.get_filtered(route_filters)
        elsif (params[:userId])
            @routes = User.find(params[:userId]).routes
        end
        render "api/routes/index"
    end

    def destroy
        @route = Route.find(params[:id])

        if @route.creator_id != current_user.id
            render json: ["UNAUTHORIZED"];
            return
        end

        if @route.destroy
            render :show
        else
            render json @route.errors.full_messages, status: 422
        end
    end

    private

    def route_params
        params.require(:route).transform_keys(&:underscore).permit(
            :creator_id,
            :name,
            :route,
            :start_lat,
            :start_lng
        )
    end

    def route_filters
        params[:filters]
    end

end
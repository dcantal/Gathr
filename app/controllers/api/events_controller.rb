class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update]

    def index
        @events = Event.all

        render :index
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
            @group = @event.group
            render "api/groups/show"
        end
    end

    private

    def event_params
        params.require(:event).permit(:group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :private)
    end
end
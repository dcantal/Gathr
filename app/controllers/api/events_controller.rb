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
        if !@event.photo
            file = open('https://s3.amazonaws.com/gathr-dc-seeds/default-event.jpg')
            @event.photo.attach(io: file, filename: 'default-event.jpg')
        end
        @event.start_time = DateTime.strptime(event_params["start_time"], '%m-%d-%Y %I:%M %p')
        @event.end_time = DateTime.strptime(event_params["end_time"], '%m-%d-%Y %I:%M %p')
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
        params.require(:event).permit(:group_id, :name, :description, :start_time, :end_time, :latitude, :longitude, :private, :photo)
    end
end
class Api::RsvpsController < ApplicationController
    before_action :require_logged_in

    def create
        @rsvp = Rsvp.new(user_id: current_user.id, event_id: rsvp_params[:event_id], organizer: rsvp_params[:organizer])
        if @rsvp.save
            @event = @rsvp.event
            render "api/events/show"
        else
            render json: @rsvp, status: :unprocessable_entity
        end
    end

    def destroy
        @rsvp = Rsvp.find_by(id: params[:id])
        @rsvp.destroy
        @event = @rsvp.event
        render "api/events/show"
    end

    private

    def rsvp_params
        params.require(:rsvp).permit(:user_id, :event_id, :organizer)
    end
    
end
class Api::MembershipsController < ApplicationController
    before_action :require_logged_in

    def create
        @membership = Membership.new(user_id: current_user.id, group_id: membership_params[:group_id], organizer: membership_params[:organizer])
        if @membership.save
            @group = @membership.group
            render "api/groups/show"
        else
            render json: @membership, status: :unprocessable_entity
        end

    end

    def destroy
        @membership = Membership.find_by(id: params[:id])
        @membership.destroy
        @group = @membership.group
        render "api/groups/show"
    end

    private

    def membership_params
        params.require(:membership).permit(:user_id, :group_id, :organizer)
    end
end
class Api::GroupsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        groups = Group.all

        render :index
    end

    def show
        @group = Group.find(params[:id])
    end

    def create
        debugger
        @group = Group.new(group_params)
        if @group.save
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find(params[:id])

        if @group.update(group_params)
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def destroy
        @group = Group.find(params[:id])

        if @group.destroy
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    private

    def group_params
        params.require(:group).permit(:name, :description, :hometown, :private)
    end
end
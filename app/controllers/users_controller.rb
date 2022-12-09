class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid_response

def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
end

def show
  user = User.find_by(id: session[:user_id])
  return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    render json: user, status: :created 
end

private

def user_params
  params.permit(:username, :email, :password, :password_confirmation)
end

def render_record_invalid_response(e)
  render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
end
end

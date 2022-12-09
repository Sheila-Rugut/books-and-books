class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
    
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    if session.include? :user_id
      session.delete :user_id
      render json: {}, status: :no_content
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  private

  def render_record_not_found(e)
    render json: { errors: e.record.errors.full_messages }, status: :unauthorized
  end
end

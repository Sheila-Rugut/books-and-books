class BooksController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid_response
    
      def index
        user = User.find_by(id: session[:user_id])
        if user
          books = Book.all
          render json: books, status: :created
        else
          render json: { errors: ["Not authorized"]}, status: :unauthorized
        end
      end
    
      def create
        user = User.find_by(id: session[:user_id])
        if user
          book = Book.create!(user_id: user.id, title: params[:title], author: params[:author], genre: params[:genre], synopsis: params[:synopsis])
          render json: book, status: :created
        else
          render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
      end
      def destroy
        book = Book.find_by(id: params[:id])
        if book
          book.destroy
          head :no_content
        else
          render json: { error: "Book not found" }, status: :not_found
        end
      end
      
    
      private
    
      def render_record_invalid_response(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
      end
    
    end

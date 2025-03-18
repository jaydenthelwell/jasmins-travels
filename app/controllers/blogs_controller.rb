class BlogsController < ApplicationController
  def index
    @posts = ContentfulClient.entries(content_type: 'jasminsTravelsBlog1', include: 1)

    if params[:category].present? && params[:category] != 'all'
      @posts = @posts.select do |post|
        category = post.fields[:category]
        category.present? && category.downcase == params[:category].downcase
      end
    end

    @posts = Kaminari.paginate_array(@posts).page(params[:page]).per(6)
  end

  def show
    @post = ContentfulClient.entries(content_type: 'jasminsTravelsBlog1', include: 1).find do |post|
      post.fields[:slug] == params[:id]
    end
    logger.debug @post.inspect

    return if @post

    redirect_to blogs_path, alert: 'Post not found.'
  end
end

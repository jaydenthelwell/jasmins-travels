class PagesController < ApplicationController
  def home
    @posts = ContentfulClient.entries(content_type: 'jasminsTravelsBlog1', include: 1)

    return unless params[:category].present? && params[:category] != 'all'

    @posts = @posts.select do |post|
      category = post.fields[:category]
      category.present? && category.downcase == params[:category].downcase
    end
  end

  def contact
  end

  def services
  end
end

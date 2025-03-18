module ApplicationHelper
  def contentful
    ContentfulClient
  end

  def render_contentful_content(content)
    return '' if content.nil? || content['content'].nil?

    html = ''

    content['content'].each do |node|
      case node['nodeType']
      when 'paragraph'
        paragraph_text = node['content'].map { |child| child['value'] }.join
        html += "<p>#{paragraph_text}</p>"
      when 'heading-1'
        heading_text = node['content'].map { |child| child['value'] }.join
        html += "<h1>#{heading_text}</h1>"
      else
        html += "<span>Unsupported node type: #{node['nodeType']}</span>"
      end
    end

    html.html_safe
  end
end

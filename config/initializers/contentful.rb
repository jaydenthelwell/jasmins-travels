require 'contentful'

ContentfulClient = Contentful::Client.new(
  space: 'efoudtk79op7',
  access_token: 'tkRInxckprIc1voBgsn_OS8Obd1JBJ458Oy23vtkHBA',
  environment: 'master',
  dynamic_entries: :auto,
  raise_errors: true
)

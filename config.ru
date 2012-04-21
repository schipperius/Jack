# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)
run Jack::Application

# By default, Ruby buffers its output to stdout. 
# To take advantage of Heroku’s realtime logging, you will need to disable
# this buffering to have log messages sent straight to Heroku’s logging
# infrastructure.
# To disable this buffering add this...
stdout.sync = true
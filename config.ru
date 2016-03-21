# serve files in current directory
dir = Dir.pwd
puts "--- APP START ---"
puts ">> serving: #{dir}"
run Rack::Directory.new("#{dir}")

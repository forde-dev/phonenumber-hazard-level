require "./purser.cr"

# `Umbra` is a phone number scraper for www.phonenumbers.ie
module Umbra
  VERSION = "0.1.0"
end

include NumberStatus

# "35351347761" hazard number
# "35315290177" neutral number

status = status("35315290177")
puts status


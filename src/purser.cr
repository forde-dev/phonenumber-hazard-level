require "myhtml"
require "./lookup.cr"

module Purser

    def hazard_rating(html : String)
        myhtml = Myhtml::Parser.new(html)
        myhtml.nodes(:div).each do |node|
            id = node.attribute_by("id")
            if id == "progress-bar-inner"
                return node.inner_text
            end
        end
    end
    
    def num_of_comments(html : String)
        myhtml = Myhtml::Parser.new(html)
        myhtml.nodes(:span).each do |node|
            id = node.attribute_by("id")
            if id == "count-comments"
                return node.inner_text
            end
        end
    end

end

module NumberStatus
    include HtmlRetriever
    include Purser

    def status(number : String)
        url = "https://phonenumbers.ie/number/" + number
        html = collect(url)
        if html == "404"
            return "Number Not Found"
        end

        h = hazard_rating(html)
        c = num_of_comments(html)

        puts h
        puts c

        h = h.not_nil!.to_i

        if h > 50
            return "Hazard"
        elsif h < 50 && h > 10
            return "Warning"
        else
            return "Nutual"
        end
    end

end

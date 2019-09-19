require "crest"

# `HtmlRetriever` holds methods to do with getting html
module HtmlRetriever

    # `colect` gets html pages from the internet by a given url
    def collect(url : String) : String
        begin
            html = Crest.get(url)
            return html.body
        rescue
            return "404"
        end
    end
end

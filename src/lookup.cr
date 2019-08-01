require "crest"

module HtmlRetriever

    def collect(url : String) : String
        begin
            html = Crest.get(url)
            return html.body
        rescue
            return "404"
        end
    end
end

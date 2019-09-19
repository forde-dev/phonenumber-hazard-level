crystal_doc_search_index_callback({"repository_name":"github.com/fordetek/phonenumber-hazard-level","body":"# Phonenumber Hazard Level\n\nThis program allows you to gather a hazard level on any phonenumber you insert into it,\nthe hazard level is a pecentage from 1 to 100, 100 being the most dangours and 0 being the least\n\n## Contributing\n\n1. Fork it (<https://github.com/fordetek/phonenumber-hazard-level/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Michael Forde](https://github.com/fordetek) - creator and maintainer\n","program":{"html_id":"github.com/fordetek/phonenumber-hazard-level/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","kind":"module","full_name":"NumberStatus","name":"NumberStatus"},{"html_id":"github.com/fordetek/phonenumber-hazard-level/Purser","kind":"module","full_name":"Purser","name":"Purser"},{"html_id":"github.com/fordetek/phonenumber-hazard-level/HtmlRetriever","kind":"module","full_name":"HtmlRetriever","name":"HtmlRetriever"}],"locations":[],"repository_name":"github.com/fordetek/phonenumber-hazard-level","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","kind":"module","full_name":"NumberStatus","name":"NumberStatus"}],"extended_modules":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","kind":"module","full_name":"NumberStatus","name":"NumberStatus"}],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/HtmlRetriever","path":"HtmlRetriever.html","kind":"module","full_name":"HtmlRetriever","name":"HtmlRetriever","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"lookup.cr","line_number":4,"url":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/lookup.cr"}],"repository_name":"github.com/fordetek/phonenumber-hazard-level","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","kind":"module","full_name":"NumberStatus","name":"NumberStatus"}],"namespace":null,"doc":"`HtmlRetriever` holds methods to do with getting html","summary":"<p><code><a href=\"HtmlRetriever.html\">HtmlRetriever</a></code> holds methods to do with getting html</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"collect(url:String):String-instance-method","html_id":"collect(url:String):String-instance-method","name":"collect","doc":"`colect` gets html pages from the internet by a given url","summary":"<p><code>colect</code> gets html pages from the internet by a given url</p>","abstract":false,"args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"}],"args_string":"(url : String) : String","source_link":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/lookup.cr#L7","def":{"name":"collect","args":[{"name":"url","doc":null,"default_value":"","external_name":"url","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"begin\n  html = Crest.get(url)\n  return html.body\nrescue\n  return \"404\"\nend"}}],"macros":[],"types":[]},{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","path":"NumberStatus.html","kind":"module","full_name":"NumberStatus","name":"NumberStatus","abstract":false,"superclass":null,"ancestors":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/Purser","kind":"module","full_name":"Purser","name":"Purser"},{"html_id":"github.com/fordetek/phonenumber-hazard-level/HtmlRetriever","kind":"module","full_name":"HtmlRetriever","name":"HtmlRetriever"}],"locations":[{"filename":"purser.cr","line_number":29,"url":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/purser.cr"}],"repository_name":"github.com/fordetek/phonenumber-hazard-level","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/HtmlRetriever","kind":"module","full_name":"HtmlRetriever","name":"HtmlRetriever"},{"html_id":"github.com/fordetek/phonenumber-hazard-level/Purser","kind":"module","full_name":"Purser","name":"Purser"}],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"status(number:String)-instance-method","html_id":"status(number:String)-instance-method","name":"status","doc":null,"summary":null,"abstract":false,"args":[{"name":"number","doc":null,"default_value":"","external_name":"number","restriction":"String"}],"args_string":"(number : String)","source_link":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/purser.cr#L33","def":{"name":"status","args":[{"name":"number","doc":null,"default_value":"","external_name":"number","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"url = \"https://phonenumbers.ie/number/\" + number\nhtml = collect(url)\nif html == \"404\"\n  return \"Number Not Found\"\nend\nh = hazard_rating(html)\nc = num_of_comments(html)\nputs(h)\nputs(c)\nh = h.not_nil!.to_i\nif h > 50\n  return \"Hazard\"\nelse\n  if h < 50 && h > 10\n    return \"Warning\"\n  else\n    return \"Nutual\"\n  end\nend\n"}}],"macros":[],"types":[]},{"html_id":"github.com/fordetek/phonenumber-hazard-level/Purser","path":"Purser.html","kind":"module","full_name":"Purser","name":"Purser","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"purser.cr","line_number":5,"url":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/purser.cr"}],"repository_name":"github.com/fordetek/phonenumber-hazard-level","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[{"html_id":"github.com/fordetek/phonenumber-hazard-level/NumberStatus","kind":"module","full_name":"NumberStatus","name":"NumberStatus"}],"namespace":null,"doc":"`Purser` gathers the needed information form a `www.phonenumber.ie` webpage","summary":"<p><code><a href=\"Purser.html\">Purser</a></code> gathers the needed information form a <code>www.phonenumber.ie</code> webpage</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"hazard_rating(html:String)-instance-method","html_id":"hazard_rating(html:String)-instance-method","name":"hazard_rating","doc":null,"summary":null,"abstract":false,"args":[{"name":"html","doc":null,"default_value":"","external_name":"html","restriction":"String"}],"args_string":"(html : String)","source_link":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/purser.cr#L7","def":{"name":"hazard_rating","args":[{"name":"html","doc":null,"default_value":"","external_name":"html","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"myhtml = Myhtml::Parser.new(html)\n(myhtml.nodes(:div)).each do |node|\n  id = node.attribute_by(\"id\")\n  if id == \"progress-bar-inner\"\n    return node.inner_text\n  end\nend\n"}},{"id":"num_of_comments(html:String)-instance-method","html_id":"num_of_comments(html:String)-instance-method","name":"num_of_comments","doc":null,"summary":null,"abstract":false,"args":[{"name":"html","doc":null,"default_value":"","external_name":"html","restriction":"String"}],"args_string":"(html : String)","source_link":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/purser.cr#L17","def":{"name":"num_of_comments","args":[{"name":"html","doc":null,"default_value":"","external_name":"html","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"myhtml = Myhtml::Parser.new(html)\n(myhtml.nodes(:span)).each do |node|\n  id = node.attribute_by(\"id\")\n  if id == \"count-comments\"\n    return node.inner_text\n  end\nend\n"}}],"macros":[],"types":[]},{"html_id":"github.com/fordetek/phonenumber-hazard-level/Umbra","path":"Umbra.html","kind":"module","full_name":"Umbra","name":"Umbra","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"phonenumber.cr","line_number":4,"url":"https://github.com/fordetek/phonenumber-hazard-level/blob/776e6847dbe6a5e90f69b8e24a39f9806cf805aa/src/phonenumber.cr"}],"repository_name":"github.com/fordetek/phonenumber-hazard-level","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"`Phonenumber-Hazard-level` is a phone number scraper for www.phonenumbers.ie","summary":"<p><code>Phonenumber-Hazard-level</code> is a phone number scraper for www.phonenumbers.ie</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}})
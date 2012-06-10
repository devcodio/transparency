// Generated by CoffeeScript 1.3.3
(function() {

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    require('./spec_helper');
    window.Transparency = require('../src/transparency');
  }

  describe("Transparency", function() {
    return it("should use a custom matcher if available", function() {
      var data, data_bind_matcher, default_matcher, expected_with_custom_matcher, template;
      template = $("<div class=\"container\">\n   <h1 data-bind=\"title\"></h1>\n   <p class=\"post\"></p>\n   <div data-bind=\"comments\">\n     <div class=\"comment\">\n       <span class=\"name\"></span>\n       <span data-bind=\"text\"></span>\n     </div>\n   </div>\n </div>");
      data = {
        title: 'Hello World',
        post: 'Hi there it is me',
        comments: [
          {
            name: 'John',
            text: 'That rules'
          }, {
            name: 'Arnold',
            text: 'Great post!'
          }
        ]
      };
      data_bind_matcher = function(element, key) {
        return element.getAttribute('data-bind') === key;
      };
      expected_with_custom_matcher = $("<div class=\"container\">\n  <h1 data-bind=\"title\">Hello World</h1>\n  <p class=\"post\"></p>\n  <div data-bind=\"comments\">\n    <div class=\"comment\">\n      <span class=\"name\"></span>\n      <span data-bind=\"text\">That rules</span>\n    </div>\n    <div class=\"comment\">\n      <span class=\"name\"></span>\n      <span data-bind=\"text\">Great post!</span>\n    </div>\n  </div>\n</div>");
      default_matcher = window.Transparency.config.matcher;
      window.Transparency.config.matcher = data_bind_matcher;
      template.render(data);
      expect(template).htmlToBeEqual(expected_with_custom_matcher);
      return window.Transparency.config.matcher = default_matcher;
    });
  });

}).call(this);

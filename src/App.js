// Generated by Melange
'use strict';

var React = require("react");
var NotFound = require("./NotFound.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var CommentsPage = require("./CommentsPage.js");
var TopStoriesPage = require("./TopStoriesPage.js");
var RescriptReactRouter = require("@rescript/react/./src/RescriptReactRouter.js");

function App(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (!match) {
    return React.createElement(TopStoriesPage.make, {});
  }
  if (match.hd === "comments") {
    var match$1 = match.tl;
    if (match$1 && !match$1.tl) {
      return React.createElement(CommentsPage.make, {
                  id: Caml_format.caml_int_of_string(match$1.hd)
                });
    }
    
  }
  return React.createElement(NotFound.make, {});
}

var make = App;

exports.make = make;
/* react Not a pure module */

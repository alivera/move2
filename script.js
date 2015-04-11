var main = function() {
   $(function() {
    var findCity = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Hong Kong",
      "Java",
      "JavaScript",
      "Lisp",
      "Los Angeles",
      "New York",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "Shanghai"
    ];
    $("#findCity").autocomplete({source:findCity});
  });
}
 
$(document).ready(main);
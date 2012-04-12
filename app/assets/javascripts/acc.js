// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Accordion Menu *****************************************
$("html").addClass("js");
$(function() {
  $("#side").accordion({
    event: "hover", 
    interval: 400,
    initShow : "#current"
  });
  $("#main").accordion({
      obj: "div", 
      wrapper: "div", 
      el: ".h", 
      head: "h4", 
      next: "div", 
      initShow : "div.outer:first",
      event : "hover",
      collapsible : false
    });
  $("html").removeClass("js");
});
// End Accordion Menu *************************************
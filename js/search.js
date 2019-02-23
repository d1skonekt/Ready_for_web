$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});
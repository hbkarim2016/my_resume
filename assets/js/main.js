// Script Main
$(document).ready(function(){
  // Height
  $('#cubeTransition').height($(window).height());
  // Preloader
  $(document).ready(function(){
      $.fakeLoader({
          timeToHide:1200,
          bgColor:"#3ea6ff",
          spinner:"spinner5"
      });
  });
});

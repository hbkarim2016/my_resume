// Script Main
$(document).ready(function(){
  // Height
  $('#cubeTransition').height($(window).height());
  // Menu Button [ Show Side Menu ]
  $('.menu_button').click(function(){
    $('.sideBar').toggleClass('move_left');
  });
  // Preloader
  $(document).ready(function(){
      $.fakeLoader({
          timeToHide:1200,
          bgColor:"#5fbec7",
          spinner:"spinner5"
      });
  });
});

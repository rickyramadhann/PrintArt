 /*-------------------------------------
  SIDEBAR
  -------------------------------------*/
  $(document).ready(function () {
   $('#sidebarCollapse').on('click', function () {
     $('#sidebar').toggleClass('active');
     $('#content').toggleClass('active-content');
   });
 });
  var w = window.innerWidth;
  if(w<=992 && w>=769){
   $('#sidebar').toggleClass('active');
   $('#content').toggleClass('active-content');
 }
/*-------------------------------------
  BUTTON SEARCH
  -------------------------------------*/
  $('#submit').click(function() {
    if ($('#submit').val() == '0'){
     $('#search').css("width", "calc(100% - 200px)");
     $('#search').css("padding-left", "10px");
     $('#submit').val('1');
     $('#navbar-left').addClass('hidden-cust');
   }
   else{
     $('#search').css("width", "0");
     $('#search').css("padding-left", "0");
     $('#submit').val('0');
     $('#navbar-left').removeClass('hidden-cust');;
   }
 });
/*-------------------------------------
  UPLOAD IMAGES
  -------------------------------------*/
  function uploadimage() {
    var output = document.getElementById('imgview');
    output.src = URL.createObjectURL(event.target.files[0]);
  };

  var materialInputs = $('input.input-material');

// activate labels for prefilled values
materialInputs.filter(function() { return $(this).val() !== ""; }).siblings('.label-material').addClass('active');

// move label on focus
materialInputs.on('focus', function () {
  $(this).siblings('.label-material').addClass('active');
});

// remove/keep label on blur
materialInputs.on('blur', function () {
  $(this).siblings('.label-material').removeClass('active');

  if ($(this).val() !== '') {
    $(this).siblings('.label-material').addClass('active');
  } else {
    $(this).siblings('.label-material').removeClass('active');
  }
});
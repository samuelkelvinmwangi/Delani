$(document).ready(function(){
    $('#design-image').click(function(){
      $('#design-image').slideUp('1500');
      $('#1').slideDown('1500');
    })
    $('#1').click(function(){
        $('#1').slideUp('1500');
        $('#design-image').slideDown('1500');
      })
      $('#development-image').click(function(){
        $('#development-image').slideUp('1500');
        $('#2').slideDown('1500');
      })
      $('#2').click(function(){
          $('#2').slideUp('1500');
          $('#development-image').slideDown('1500');
        })
        $('#pm-image').click(function(){
            $('#pm-image').slideUp('1500');
            $('#3').slideDown('1500');
          })
          $('#3').click(function(){
              $('#3').slideUp('1500');
              $('#pm-image').slideDown('1500');
            })
    })
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



    $(document).ready(function(){
        $("#i1").mouseover(function(){
         $("#w1").show();
        }).mouseout(function(){
          $("#w1").hide();
        });

        $("#i2").mouseover(function(){
            $("#w2").show();
          }).mouseout(function(){
            $("#w2").hide();
          });

          $("#i3").mouseover(function(){
            $("#w3").show();
          }).mouseout(function(){
            $("#w3").hide();
          });

          $("#i4").mouseover(function(){
            $("#w4").show();
          }).mouseout(function(){
            $("#w4").hide();
          });

          $("#i5").mouseover(function(){
            $("#w5").show();
          }).mouseout(function(){
            $("#w5").hide();
          });

          $("#i6").mouseover(function(){
            $("#w6").show();
          }).mouseout(function(){
            $("#w6").hide();
          });

          $("#i7").mouseover(function(){
            $("#w7").show();
          }).mouseout(function(){
            $("#w7").hide();
          });

          $("#i8").mouseover(function(){
            $("#w8").show();
          }).mouseout(function(){
            $("#w8").hide();
          });
    })
$(document).ready(function(){

    $(document).ready(function(){
        $("button").click(function(){
          $("p").toggle();
        });
      });


    
    $('input,label').focus(function(){
        if( $(this).val() == "" ){
        


        //console.log( $(this).attr('id') )
        $('main section.notification-area').append('<p class="notification">Please fill ' + $(this).attr('id') + ' this out!</p>');
        }

    
    });

    $('input,label').blur(function(){
        $('p.notification').remove();


    });



    $('select#FX').change(function(){
        var currentSelection= $(this).val();

        if(currentSelection === 'show' ){
            $('.box').show(1000);
        }
        if(currentSelection === 'hide' ){
            $('.box').hide(1000);
        }

        if(currentSelection === 'slidedown' ){
            $('.box').slideDown(1000);
        }
        if(currentSelection === 'slideup' ){
            $('.box').slideUp(1000);
        }

        console.log(currentSelection);
        



    });

});
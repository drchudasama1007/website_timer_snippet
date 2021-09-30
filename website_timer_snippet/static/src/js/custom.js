odoo.define('website_timer_snippet.custom', function (require) {
'use strict';

$(document).ready(function(){

    if($('#timer').length>0){
        var date = $('#timer').val()
        if(date != "nan")
        {
          var countDownDate = new Date(date).getTime();
          var countDownDate = new Date(countDownDate - 330*60000);

          var x = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;// Time calculations for days, hours, minutes and seconds

                if (distance > 0) {
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        if ((seconds+'').length == 1) {
                            seconds = "0" + seconds;
                        }
                        if ((days+'').length == 1) {
                            days = "0" + days;
                        }
                        if ((hours+'').length == 1) {
                            hours = "0" + hours;
                        }
                        if ((minutes+'').length == 1) {
                            minutes = "0" + minutes;
                        }
                }
                // If the count down is over, write some text
                if (distance <= 0)
                {
                    clearInterval(x);
                    seconds = "00" ;
                    days = "00";
                    minutes = "00";
                    hours = "00";
                    $('.js_timer_div').empty();
                }
                $('#second').html(seconds)
                $('#minite').html(minutes)
                $('#hour').html(hours)
                $('#day').html(days)
                }, 1000);
        }
    }

})


})
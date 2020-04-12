     //Flipclock
    var clock;
    clock = $(".clock").FlipClock({
        clockFace: "DailyCounter",
        autoStart : false,
        Callbacks : {
            stop : function() {
                $(".message").html("Offer End");
            }
        }
    });
    var dt = "May 30 2019 13:25:48";
    var first = new Date(dt);
    var last = Date.now();
    var remaining = first - last;
    remaining /=1000;

    clock.setTime(remaining);
    clock.setCountdown(true);
    clock.start();
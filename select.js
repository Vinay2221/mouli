// Birthday Date

let birthday = new Date("October 25, 2026 18:00:00").getTime();


// Countdown

let countdown = setInterval(function () {

    let now = new Date().getTime();

    let difference = birthday - now;


    let days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    let seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;


    if (difference < 0) {

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
            "<h2>🎉 The Party Has Started! 🎉</h2>";
    }

}, 1000);


// RSVP Button

function rsvp() {

    document.getElementById("response").innerText =
        "🎉 Thank you! Your RSVP has been received. See you at the party! ❤️";

}
function info(packageName) {

    if (packageName == "Bako") {

        alert(
            "Bako National Park\n\n" +
            "Jungle trekking & wildlife"
        );

    }

    else if (packageName == "Mulu") {

        alert(
            "Mulu Adventure\n\n" +
            "Cave exploration & hiking"
        );

    }

    else {

        alert(
            "Kuching City Tour\n\n" +
            "Food, culture & sightseeing"
        );

    }

}


/* BOOKING VALIDATION */

$("#bookingForm").submit(function(e) {

    e.preventDefault();

    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let date = $("#date").val();
    let people = $("#people").val();
    let pack = $("#package").val();
    let consent = $("#consent").is(":checked");

    let error = "";

    if (name == "")
        error += "Enter your name.<br>";

    if (phone == "")
        error += "Enter phone number.<br>";

    if (email == "")
        error += "Enter email.<br>";

    if (date == "")
        error += "Select travel date.<br>";

    if (people == "")
        error += "Enter participants.<br>";

    if (pack == "")
        error += "Select tour package.<br>";

    if (!consent)
        error += "Please agree to privacy policy.<br>";


    if (error != "") {

        $("#error").html(error).show();
        $("#success").hide();

    } else {

        $("#error").hide();

        $("#success")
        .html("✅ Booking successful!")
        .show();

    }

});


/* CONTACT VALIDATION */

$("#contactForm").submit(function(e) {

    e.preventDefault();

    let name = $("#cname").val();
    let email = $("#cemail").val();
    let message = $("#message").val();

    if (name == "" ||
        email == "" ||
        message == "") {

        $("#cerror")
        .html("Please complete all fields.")
        .show();

        $("#csuccess").hide();

    } else {

        $("#cerror").hide();

        $("#csuccess")
        .html("✅ Message sent!")
        .show();

    }

});

function payNow(){
    var options = {
        "key": "YOUR_RAZORPAY_KEY", // ⚠️ apni key dalna
        "amount": 19900, // ₹199
        "currency": "INR",
        "name": "RogSeva",
        "description": "Doctor Premium Plan",
        "handler": function (response){
            alert("Payment Successful ✅");

            // Premium activate
            localStorage.setItem("premium_user","yes");
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}
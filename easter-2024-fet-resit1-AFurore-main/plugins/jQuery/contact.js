function updateDetails() {
    let telephone_number = prompt("Please enter your telephone number (numbers only):");
    if (!/^\d+$/.test(telephone_number)) {
        alert("Please enter a valid telephone number (numbers only).");
        return;
    }
        let email_address = prompt("Please enter your email address:");
        if (!email_address.includes('@') || !email_address.includes('.')) {
        alert("Please enter a valid email address.");
        return;
    }
    
    $("#telephone-info").text(telephone_number);
    $("#email-info").text(email_address);
    
    console.log("Contact: " + telephone_number);
    console.log("Email Address: " + email_address);
}

$("#update-contact").click(updateDetails);
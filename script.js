const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");








pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        str.style.color = "red";
        pass.style.border = "1px solid red";
    } else if (pass.value.length < 8) {
        str.innerHTML = "Medium";
        str.style.color = "orange";
        pass.style.border = "1px solid orange";
    } else if (pass.value.length > 8) {
        str.innerHTML = "Strong";
        str.style.color = "lightgreen";
        pass.style.border = "1px solid lightgreen";
    }



})
let signInForm = document.querySelector('.input-fields');

const username = signInForm.firstElementChild.firstElementChild;
const password = signInForm.children[1].firstElementChild;


signInForm.lastElementChild.addEventListener("click", () => {
    if(username.value === "admin" && password.value === "admin"){
        notFound("Your account " + "\"" + username.value + "\"" + " is logged in succesfully", "Logging in in 3 seconds", "#42f54e");
        setTimeout(function() {
            window.location.href = "homepage.html";
        }, 3000);
    } else if(username.value === "" && password.value !== "") {
            error(signInForm.children[0], "Please enter a valid email or phone number");
    } else if(password.value === "" && username.value !== "") {
            error(signInForm.children[1], "Your password must contain between 4 and 60 characters.");
    } else if(username.value === "" && password.value === ""){
        alert("enter all input fields");
    } else {
            notFound("Incorrect password for " + username.value, "You can use a sign-in code, reset your password or try again.", "rgb(216, 157, 49)");
    }
})

function error(target, message){
    let p = document.createElement('p');
    p.textContent = message;
    p.style.color = "red";

    signInForm.insertBefore(p, target.nextSibling);

    console.log(p);
}

function notFound(message, message1, color) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    // p.textContent = "Incorrect password for " + username.value;
    p.textContent = message;
    div.appendChild(p);
    let p1 = document.createElement("p");
    // p1.textContent = "You can use a sign-in code, reset your password or try again.";
    p1.textContent = message1;
    div.appendChild(p1);

    div.style.fontFamily = "Segoe Ui";
    div.style.fontSize = "17px";
    div.style.backgroundColor = color;
    p.style.color = "black";
    p.style.fontWeight = "600";
    p1.style.color = "black";
    div.style.padding = "15px";
    div.style.borderRadius = "5px";
    signInForm.insertBefore(div, signInForm.firstElementChild);
}
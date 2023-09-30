
const styles = [".s5-img1-div", ".s5-img2-div", ".s5-img3-div", ".s5-img4-div", ".s5-button"]
function reveal() {
    console.log("reveal function called")
    for(const item of styles){
        var reveals = document.querySelectorAll(item);
        for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 125;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("inFrame");
        } else {
            reveals[i].classList.remove("inFrame");
        }
      }
    }
  }

window.addEventListener("scroll", reveal);


// Get all the elements with class "s5-button" and "s5-button-img"
var buttons = document.querySelectorAll(".s5-button");
var buttonImgs = document.querySelectorAll(".s5-button-img");

// Attach event listeners to each "div" element
document.querySelectorAll(".s5-img1-div, .s5-img2-div, .s5-img3-div, .s5-img4-div").forEach(function (div, index) {
    div.addEventListener("mouseover", function () {
        mouseOver(div, buttons[index], buttonImgs[index]);
    });
    div.addEventListener("mouseout", function () {
        mouseOut(div, buttons[index], buttonImgs[index]);
    });
});

function mouseOver(div, a, b) {
    console.log("button has been displayed");
    a.classList.add("mouseover");
    b.classList.add("mouseover");
}

function mouseOut(div, a, b) {
    a.classList.remove("mouseover");
    b.classList.remove("mouseover");
}

function sendemail(){
    Email.send({
    SecureToken : "f2625598-dc43-4427-a4e2-f60de856a06c",
    To : 'theatlanta1@gmail.com',
    From : "info@hbgcombatclub.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
       message => alert(message)
    );
}

document.addEventListener("DOMContentLoaded", function () {
        const burgerButton = document.querySelector(".burger-button");
        const menuLinks = document.querySelector(".menu-links");

        burgerButton.addEventListener("click", function () {
            menuLinks.classList.toggle("show-menu");
        });
    });
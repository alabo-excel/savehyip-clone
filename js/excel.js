var account = document.getElementById("accounts");
var add = document.getElementById("aditional1");

account.addEventListener("click", () => {
    if (add.style.display === "none") {
        add.style.display = "block";
    } else {
        add.style.display = "none";
    }
});
var finance = document.getElementById("finance");
var add2 = document.getElementById("aditional2");

finance.addEventListener("click", () => {
    if (add2.style.display === "none") {
        add2.style.display = "block";
    } else {
        add2.style.display = "none";
    }
});
var add4 = document.getElementById("add4");
var reports = document.getElementById("reports");

add4.addEventListener("click", () => {
    if (reports.style.display === "none") {
        reports.style.display = "block";
    } else {
        reports.style.display = "none";
    }
});
var add3 = document.getElementById("add3");
var referal = document.getElementById("referal");

add3.addEventListener("click", () => {
    if (referal.style.display === "none") {
        referal.style.display = "block";
    } else {
        referal.style.display = "none";
    }
});

var bars = document.getElementById("bars");
var close = document.getElementById("close");
var hidden = document.getElementById("hidden");

bars.addEventListener("click", () => {
    hidden.style.display = "block";
});

close.addEventListener("click", () => {
    hidden.style.display = "none";
});
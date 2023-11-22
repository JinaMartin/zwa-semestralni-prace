window.addEventListener("load", function() {
	document.getElementById('homeid').addEventListener("click", gotoHome)
	document.getElementById('loginid').addEventListener("click", gotoLogin)
	document.getElementById('myoffersid').addEventListener("click", gotoMyOffers)
	document.getElementById('profileid').addEventListener("click", gotoProfile)
	document.getElementById('registerid').addEventListener("click", gotoRegister)
});

function gotoHome() { window.location = "home.html" }
function gotoMyOffers() { window.location = "myoffers.html"; }
function gotoProfile() { window.location = "profile.html" }
function gotoRegister() { window.location = "register.html" }
function gotoLogin() { window.location = "login.html" }
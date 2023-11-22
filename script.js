window.addEventListener("load", function() {
	document.getElementById('homeid').addEventListener("click", gotoHome)
	document.getElementById('loginid').addEventListener("click", gotoLogin)
	document.getElementById('myoffersid').addEventListener("click", gotoMyOffers)
	document.getElementById('profileid').addEventListener("click", gotoProfile)
	document.getElementById('registerid').addEventListener("click", gotoRegister)
});

function gotoHome() { window.location = "file:///Users/mjina/fel/zwa/remake-semestral/home.html" }
function gotoMyOffers() { window.location = "file:///Users/mjina/fel/zwa/remake-semestral/myoffers.html"; }
function gotoProfile() { window.location = "file:///Users/mjina/fel/zwa/remake-semestral/profile.html" }
function gotoRegister() { window.location = "file:///Users/mjina/fel/zwa/remake-semestral/register.html" }
function gotoLogin() { window.location = "file:///Users/mjina/fel/zwa/remake-semestral/login.html" }
(function () {

	function init() {
		// Initialize your elements
		document.querySelector("#menu").onclick = openNav;
		document.querySelector("#close").onclick = closeNav;

		if (document.querySelector("#callprog") != null) {
			document.querySelector("#callprog").onclick = progress;
		}

		if (document.querySelector("#mozzbutton") != null) {
			document.querySelector("#mozzbutton").onclick = mozzarella;
			document.querySelector("#pepbutton").onclick = pepperoni;
			document.querySelector("#hambutton").onclick = ham;
			document.querySelector("#mushbutton").onclick = mushrooms;
			document.querySelector("#saladbutton").onclick = salad;
			document.querySelector("#olibutton").onclick = olives;
		}

		// testing 

	}

	(function () {
		'use strict';

		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation');

		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', function (event) {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					}

					form.classList.add('was-validated');

				}, false);
			});

	})();

	$(function () {
		$('.example-popover').popover({
			container: 'body'
		});
	});

	$(function () {
		$('[data-toggle="popover"]').popover();
	});


	function progress() {
		let element = document.querySelector("#prog");
		let text = document.querySelector("#dumb");
		let btn = document.querySelector("#callprog");
		element.classList.toggle("full");
		let timer = setInterval(function () {
			let width1 = $("#prog").parent().width();
			let width2 = $("#prog").width();
			let percentage = width2 / width1 * 100;
			if (percentage > 1) {
				text.innerHTML = "Your order is on the way!";
			}
			if (percentage >= 70) {
				text.innerHTML = "Almost there!";
			}
			if (percentage === 100) {
				text.innerHTML = "Your order is here!";
				clearInterval(timer);
			}
			if (percentage > 99) {
				btn.innerHTML = "Reset";
			}
			if (percentage < 99) {
				btn.innerHTML = "Order";
			}
		}, 1);

	}

	function mozzarella() {
		let element = document.querySelector("#mozzarella");
		element.classList.toggle("invis");
	}

	function pepperoni() {
		let element = document.querySelector("#pepperoni");
		element.classList.toggle("invis");
	}

	function ham() {
		let element = document.querySelector("#ham");
		element.classList.toggle("invis");
	}

	function olives() {
		let element = document.querySelector("#olives");
		element.classList.toggle("invis");
	}

	function mushrooms() {
		let element = document.querySelector("#mushrooms");
		element.classList.toggle("invis");
	}

	function salad() {
		let element = document.querySelector("#salad");
		element.classList.toggle("invis");
	}

	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
	function openNav() {
		invisible();
		document.getElementById("mySidenav").style.width = "250px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
	function closeNav() {
		visible();
		document.getElementById("mySidenav").style.width = "0";
		document.body.style.backgroundColor = "white";
	}

	function invisible() {
		if (document.getElementById("indicators") != null) {
			document.getElementById("indicators").style.visibility = "hidden";
			document.getElementById("prev").style.visibility = "hidden";
			document.getElementById("next").style.visibility = "hidden";
		}
	}

	function visible() {
		if (document.getElementById("indicators") != null) {
			document.getElementById("indicators").style.visibility = "visible";
			document.getElementById("prev").style.visibility = "visible";
			document.getElementById("next").style.visibility = "visible";
		}
	}

	let landing = document.getElementById('home');
	let nav = document.querySelector('nav');
	window.onscroll = function () {
		if (landing != null) {
			if (window.pageYOffset > landing.clientHeight) {
				nav.style.backgroundColor = '#fff3cb';
			} else {
				nav.style.backgroundColor = 'transparent';
			}
		}
	};

	// No need to change this
	window.onload = function () {
		// Init is called once window has been loaded
		init();
	};
})();
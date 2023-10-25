
/* Smooth Scrolling */
jQuery(document).ready(function ($) {
	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

	/*Make sure that header-background-image height is equal to the browser height.*/
	$('header').css({ 'height': $(window).height() });
	$(window).on('resize', function () {

		$('header').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});

	/*Creates grey nav bar*/
	$(window).on('ready', function () {
		var y = $(window).scrollTop();
		var nav = $('#nav-wrap');

		nav.addClass('opaque').fadeIn('fast');
	});
});

/*Makes responsive headline responsive when hovered */
document.addEventListener('DOMContentLoaded', function () {
	const nameElement = document.getElementById('name');
	const nameText = nameElement.textContent;
	let newNameHTML = '';

	for (const letter of nameText) {
		newNameHTML += letter === ' ' ? ' ' : `<span class="hover-letter">${letter}</span>`;
	}

	nameElement.innerHTML = newNameHTML;
});

/* makes each letter a diffrent color when hovered*/
document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const nameText = nameElement.textContent;
    let newNameHTML = '';

    for (const letter of nameText) {
        newNameHTML += letter === ' ' ? ' ' : `<span class="hover-letter">${letter}</span>`;
    }

    nameElement.innerHTML = newNameHTML;

    const letters = document.querySelectorAll('.hover-letter');

    letters.forEach((letter) => {
        letter.addEventListener('mouseover', () => {
            const randomColor = getRandomPrideColor();
            letter.style.color = randomColor;
        });
    });
});

function getRandomPrideColor() {
    // Define the 6 LGBTQ+ pride colors
    const prideColors = [
        'rgb(255, 0, 0)',     // Red
        'rgb(255, 165, 0)',  // Orange
        'rgb(255, 255, 0)',  // Yellow
        'rgb(0, 128, 0)',    // Green
        'rgb(0, 0, 255)',    // Blue
        'rgb(128, 0, 128)'   // Purple
    ];

    // Pick a random color from the array
    const randomIndex = Math.floor(Math.random() * prideColors.length);
    return prideColors[randomIndex];
}

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    const modalIds = ["myModal", "modalSarah", "modalKevin", "modalCameron", "modalOther","modalScott","modalSara"]; // Add all modal ids here
    modalIds.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
// Download flier
document.querySelectorAll('.item-wrap a').forEach(function(link) {
    link.addEventListener('click', function() {
        console.log('Download initiated for:', this.href);
    });
});




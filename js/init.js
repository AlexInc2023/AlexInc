
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
window.onclick = function (event) {
    const modalIds = ["myModal", "modalSarah", "modalKevin", "modalCameron", "modalOther", "modalScott", "modalSara"]; // Add all modal ids here
    modalIds.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
// Download flier
document.querySelectorAll('.item-wrap a').forEach(function (link) {
    link.addEventListener('click', function () {
        console.log('Download initiated for:', this.href);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById('newsletterModal');

    // Check if modal exists
    if (!modal) return;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close-btn')[0];

    // Show the modal when the page loads
    window.onload = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
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
window.onclick = function (event) {
    const modalIds = ["myModal", "modalSarah", "modalKevin", "modalCameron", "modalOther", "modalScott", "modalSara"]; // Add all modal ids here
    modalIds.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
// Download flier
document.querySelectorAll('.item-wrap a').forEach(function (link) {
    link.addEventListener('click', function () {
        console.log('Download initiated for:', this.href);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the modals
    var newsletterModal = document.getElementById('newsletterModal');
    var donationModal = document.getElementById('donationModal');

    // Get the <span> elements that close the modals
    var closeNewsletterModal = document.querySelector('#newsletterModal .close-btn');
    var closeDonationModal = document.querySelector('#donationModal .close-btn');

    // Show the newsletter modal when the page loads
    if (newsletterModal) {
        window.onload = function () {
            newsletterModal.style.display = "block";
        }
    }

    // When the user clicks on <span> (x), close the newsletter modal
    if (closeNewsletterModal) {
        closeNewsletterModal.onclick = function () {
            newsletterModal.style.display = "none";
        }
    }

    // When the user clicks on <span> (x), close the donation modal
    if (closeDonationModal) {
        closeDonationModal.onclick = function () {
            donationModal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modals, close them
    window.onclick = function (event) {
        if (event.target === newsletterModal) {
            newsletterModal.style.display = "none";
        }
        if (event.target === donationModal) {
            donationModal.style.display = "none";
        }
    }

    // Get the donation link
    var donationLink = document.getElementById('donationsLink');

    // When the user clicks on the donation link, show the donation modal
    if (donationLink) {
        donationLink.onclick = function (event) {
            event.preventDefault(); // Prevent the default link behavior
            donationModal.style.display = "block";
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var events = document.querySelectorAll('.event-item');

    events.forEach(function (event) {
        var eventDate = new Date(event.getAttribute('data-event-date'));
        if (eventDate < currentDate) {
            event.remove();
        }
    });
});








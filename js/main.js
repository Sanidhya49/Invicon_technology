(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);



function handleAboutClick() {
    window.location.href = "about.html";
}

function handleMissionClick() {
    window.location.href = "about.html";
}

function handleVisionClick() {
    window.location.href = "about.html";
}


// contact us google map
function initMap() {
    const cityCenter = { lat: 22.7196, lng: 75.8577 }; // Coordinates for Indore
    const map = new google.maps.Map(document.getElementById("location-map"), {
        zoom: 12,
        center: cityCenter,
    });
    const marker = new google.maps.Marker({
        position: cityCenter,
        map: map,
    });
}

function handleMapError() {
    console.error('Google Maps failed to load');
    document.getElementById('location-map').textContent = 'Failed to load Google Maps. Please check your internet connection and try again.';
}

//  careers form js
document.addEventListener('DOMContentLoaded', function() {
    // Populate years and months dropdowns
    var yearSelect = document.getElementById('experienceYears');
    var monthSelect = document.getElementById('experienceMonths');

    for (var i = 0; i <= 30; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i + (i === 1 ? ' Year' : ' Years');
        yearSelect.appendChild(option);
    }

    for (var i = 0; i <= 11; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i + (i === 1 ? ' Month' : ' Months');
        monthSelect.appendChild(option);
    }

    // Form validation
    var form = document.getElementById('applicationForm');
    var errorAlert = document.getElementById('errorAlert');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var errors = [];

        // Basic validation
        if (!form.firstName.value) errors.push('First name is required');
        if (!form.lastName.value) errors.push('Last name is required');
        if (!form.email.value) errors.push('Email is required');
        if (!form.mobile.value) errors.push('Mobile number is required');
        if (!form.gender.value) errors.push('Gender is required');
        if (!form.dateOfBirth.value) errors.push('Date of birth is required');
        if (!form.resume.value) errors.push('Resume is required');

        if (errors.length > 0) {
            errorAlert.innerHTML = 'Please correct the following errors:<br>' + errors.join('<br>');
            errorAlert.style.display = 'block';
        } else {
            errorAlert.style.display = 'none';
            console.log('Form submitted successfully');
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
        }
    });
});
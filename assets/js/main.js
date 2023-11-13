(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*=======================================
            banner carousel
        ========================================*/
        var bannerCarousel = $('.banner-carousel');
            bannerCarousel.owlCarousel({
            loop:true,
            dots:true,
            dotData:true,
            startPosition:2,
            nav:true,
            item: 1,
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
            }
        }); 

        /*=======================================
            testimonial carousel
        ========================================*/
        var testimonialCarousel = $('.testimonial-slider');
        testimonialCarousel.owlCarousel({
        loop:true,
        dots:true,
        nav: false,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive : {
                0 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                960 : {
                    items: 2
                },
                1200 : {
                    items: 2
                },
                1920 : {
                    items: 2
                }
            }
        }); 



        /*=======================================
            brand carousel
        ========================================*/
        var bannerCarousel = $('.brand-carousel');
        bannerCarousel.owlCarousel({
            loop: true,
            dots: true,
            dotData: true,
            startPosition: 2,
            nav: false,
            margin: 30,
            item: 1,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        }); 

        /*=======================================
            property slider
        ========================================*/
        var bannerCarousel = $('.property-slider');
        bannerCarousel.owlCarousel({
            loop: true,
            dots: true,
            dotData: true,
            startPosition: 2,
            nav: true,
            item: 1,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        //======================================
        //========== magnificPopup video ============
        //======================================
        $('.venobox').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        }); 
        
 
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 300) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------
            preloader
        ------------------*/
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

}(jQuery));	




// Mock asynchronous function to simulate making a payment
function makePayment() {
    return new Promise((resolve, reject) => {
        // Simulate a delay for the API call
        setTimeout(() => {
            // Mock a successful payment response
            const paymentResponse = {
                success: true,
                message: 'Payment processed successfully.',
                transactionId: '12345abcde'
            };
            resolve(paymentResponse); // Resolve the promise with the mock response
        }, 2000);
    });
}

// Async function to submit the resume and handle payment
async function submitResume() {
    try {
        // Process the resume content as needed
        // ...

        // Wait for the makePayment function to complete and get the response
        const paymentResponse = await makePayment();
        
        // Check the payment response
        if (paymentResponse.success) {
            alert('Resume submitted and payment processed! Transaction ID: ' + paymentResponse.transactionId);
            const resumeText = document.getElementById('resume-textbox').value;
            const jobDescriptions = Array.from(document.querySelectorAll('[id^="job-description-textbox-"]')).map(textbox => textbox.value);
            sendResume(resumeText, jobDescriptions);

        } else {
            alert('Payment failed: ' + paymentResponse.message);
        }
    } catch (error) {
        // Handle any errors that occur during the payment process
        console.error('An error occurred:', error);
        alert('An error occurred while processing your payment.');
    }
}



document.addEventListener('DOMContentLoaded', (event) => {
    // Function to add new job ad text area
    window.addJobAd = function() {
        // Count the number of existing job ad text areas to assign a unique ID
        const jobAdContainer = document.querySelector('.job-ad-container'); // Get the correct container
        const existingJobAds = jobAdContainer.querySelectorAll('textarea[name^="job_description"]').length;
        const newJobAdNumber = existingJobAds + 1;

        // Create the new job ad text area
        const newJobAdDiv = document.createElement('div');
        newJobAdDiv.classList.add('d-flex', 'align-items-center', 'w-100');
        newJobAdDiv.style.marginTop = '20px';

        // Set the inner HTML of the container, including the new text area
        newJobAdDiv.innerHTML = `
            <div class="mr-2" style="color: #ffffff;">job_${newJobAdNumber}</div>
            <textarea id="job-description-textbox-${newJobAdNumber}" name="job_description_${newJobAdNumber}" class="form-control" rows="5" style="width: 100%; max-width: 100%;" placeholder="Everything on the job ad..."></textarea>
        `;

        // Append the new job ad div to the job ad container
        jobAdContainer.appendChild(newJobAdDiv);
    };
});


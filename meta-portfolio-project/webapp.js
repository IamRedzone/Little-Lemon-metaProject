const reservation = document.querySelector(".reserve-now")
const register= document.querySelector(".register")



  document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.querySelector(".submit-email");
    var form = document.querySelector(".form-formflex");
    var checkValidityBtn = document.querySelector(".submit-email");
    var cardSpin = document.querySelector(".card")


    // Add event listener to the button
    myButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the button
      // Add your custom logic or code here
     

        checkValidityBtn.addEventListener("click", function() {
            if (form.checkValidity()) {
              
              reservation.style.display = "block"
              cardSpin.style.transform = "rotateY(360deg)"
              cardSpin.style.transition = "0.7s ease-in-out"

              register.style.display = "none"
            } else {
              alert("Form is invalid. Please fill in all required fields.");
            }
          });


    });
  });

  // Dropdown menu section
  

  const navPopupBtn = document.getElementById('dropdown-toggle-btn')
  const navPopup = document.querySelector('.navbar')
  navPopupBtn.addEventListener('click', () => {
    navPopup.classList.toggle('popup-navigation-open')
    console.log("clicked")
    document.addEventListener("click", function(event) {
      // Check if the clicked element is NOT a part of the dropdown or dropdown toggle
      const navPopup = document.querySelector('.navbar');
      const navPopupBtn = document.getElementById("dropdown-toggle-btn");
      
      
      if (navPopup && navPopupBtn) {
           if(!navPopup.contains(event.target) && !navPopupBtn.contains(event.target)) {
        // Close the dropdown if it's open
        navPopup.classList.add('popup-navigation-open');
        // make the dropdown button show again
        navPopupBtn.style.display = 'block';
      }}
    });
    
    if(navPopup.classList.contains('.popup-navigation-open')){
      console.log("do nothing")
    } else{
      navPopupBtn.style.display = "none"
    }
  })

  // make nav dropdown close when other parts of screen are tapped

  
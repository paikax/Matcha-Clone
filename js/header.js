function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector('.logo-container');
  const triggerPoint = document.getElementById('trigger-point');

  // Intersection Observer to detect when trigger-point is visible
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Shrink the logo
                  logoContainer.classList.add("scrolled");
              } else {
                  // Logo stays big
                  logoContainer.classList.remove("scrolled");
              }
          });
      },
      { root: null, threshold: 0.1 } // Adjust the threshold to trigger at the right point
  );

  observer.observe(triggerPoint);
});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const observerTarget = document.querySelector('.content');

  const observerOptions = {
      root: null,
      threshold: 0.5 // Trigger when 50% of the target is in view
  };

  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });
  }, observerOptions);

  observer.observe(observerTarget);
});

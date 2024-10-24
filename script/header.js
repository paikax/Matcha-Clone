document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownContent = document.querySelector(".header_group_items_left_dropdown-content");

    // Toggle dropdown on click
    dropdownToggle.addEventListener("click", function() {
        dropdownContent.classList.toggle("active");
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("active");
        }
    });
});

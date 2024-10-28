function myFunction2() {
    var dropdown = document.getElementById("myDropdown2");
    dropdown.classList.toggle("show"); // Thêm hoặc xóa class "show"
  }
  
  // Đóng dropdown nếu người dùng nhấp ra ngoài
  window.onclick = function(event) {
    if (!event.target.closest('.language-toggle')) { // Kiểm tra nếu nhấp ngoài phần tử toggle
        var dropdowns = document.getElementsByClassName("dropdown_content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show"); // Đóng dropdown
            }
        }
    }
  };
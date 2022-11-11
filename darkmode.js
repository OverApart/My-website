let darkMode = localStorage.getItem("darkMode");
if (darkMode === "active") myFunction();

function myFunction() {
  darkMode = localStorage.getItem("dark-mode");
  let element = document.body;
  element.classList.toggle("dark-mode");
  let element2 = document.querySelector(".navigationbar");
  element2.classList.toggle("dark-mode2");
  let element3 = document.querySelector(".btn2");
  element3.classList.toggle("dark-mode3");

  localStorage.setItem(
    "darkMode",
    element.classList.value === "dark-mode" ? "active" : "inactive"
  );
}

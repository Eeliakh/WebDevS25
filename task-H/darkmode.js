// darkmode.js
// Author: Eeli Östberg
// Date: 2025-11-13

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const html = document.documentElement; // <html> element

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  toggleButton.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });
});
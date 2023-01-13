var toggleTheme = document.getElementById("toggle-theme");
var linkA = document.querySelectorAll("#links");
var icons = document.querySelectorAll(".socials a");

function changeTheme() {
  toggleTheme.classList.toggle("dark");
  if (toggleTheme.classList.contains("dark")) {
    linkA.forEach(anchor => {
      anchor.classList.add("dark");
    })
    icons.forEach(icon => {
    icon.classList.add("dark");
    })
    document.body.classList.add("dark");
    toggleTheme.innerHTML = `<i class="fas fa-sun"></i>`
  }
  else {
    linkA.forEach(anchor => {
        anchor.classList.remove("dark");
    })
    icons.forEach(icon => {
      icon.classList.remove("dark");
    })
    document.body.classList.remove("dark");
    toggleTheme.innerHTML = `<i class="fas fa-moon"></i>`
    toggleTheme.style.backgroundColor = `var(--link-dark)`
  }
}
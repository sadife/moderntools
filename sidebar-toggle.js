const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        // Mobil: Aç/kapa
        sidebar.classList.toggle("active");
    } else {
        // Masaüstü: Daralt / genişlet
        sidebar.classList.toggle("collapsed");
    }
});

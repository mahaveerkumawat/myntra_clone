document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.querySelector(".accordion-item-header").addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });
  });
  

  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.classList.toggle('fa-eye-slash', type === 'text');
}
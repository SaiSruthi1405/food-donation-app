<script>
  function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }

  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }

  // Close the modal if clicked outside
  window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
</script>

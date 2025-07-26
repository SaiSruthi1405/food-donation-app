<script>
  function openModal() {
    document.getElementById("donationModal").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("donationModal").style.display = "none";
    document.body.style.overflow = "";
  }

  document.getElementById("donationModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
</script>
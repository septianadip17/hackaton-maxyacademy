document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const tableContainer = document.querySelector('#tableContainer');

  dropdownToggle.addEventListener('click', function () {
    tableContainer.classList.toggle('hidden');
  });
});
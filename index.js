function loadContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const modalContent = document.querySelector('.modal-content');
      modalContent.innerHTML = data;

      // Create the close button element
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('modal-close-button');
      closeButton.addEventListener('click', () => closeModal());

      // Add the close button to the modal content
      modalContent.appendChild(closeButton);

      // Show the modal
      const modal = document.querySelector('.modal');
      modal.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

function openPopup(url) {
  loadContent(url);
}

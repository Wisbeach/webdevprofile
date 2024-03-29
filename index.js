

// Add this code at the top of your index.js file
const userPart = "warren.wisbeach";
const domainPart = "gmail.com";

// Function to set mailto link for the email icon
function setEmailLink() {
  const emailLink = document.getElementById('emailIcon');
  if (emailLink) {
    emailLink.href = `mailto:${userPart}@${domainPart}`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  setEmailLink();
  const emailIcon = document.getElementById('emailIcon');
  if (emailIcon) {
      emailIcon.addEventListener('click', (event) => {
          // Additional functionality
      });
  }
});

function loadContent(url, modalId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          const modal = document.getElementById(modalId);
          if (modal) {
              const modalContent = modal.querySelector('.modal-content');
              modalContent.innerHTML = data;

              // Create and add the close button
              const closeButton = document.createElement('button');
              closeButton.textContent = 'Close';
              closeButton.classList.add('modal-close-button');
              closeButton.onclick = () => closeModal(modalId); // Updated to use closeModal
              modalContent.appendChild(closeButton);
          }
      })
      .catch(error => console.error('Error:', error));
}


function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

function openPopup(modalId, url) {
  loadContent(url, modalId); // Pass the URL and modal ID
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'block';
  }
}



function triggerHingeEffect() {
  var elem = document.querySelector('.about-button');
  elem.classList.add('hinge-effect');
}

// Attach the event listener outside the trigger function
var elem = document.querySelector('.about-button');
if (elem) {
  elem.addEventListener('animationend', function() {
    elem.classList.remove('hinge-effect');
  });
}

function openModalWithDelay(modalId, url, delay) {
  setTimeout(function() {
    openPopup(modalId, url);
  }, delay);
}

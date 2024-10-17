// script.js

// Get elements
const openButton = document.getElementById('openVideoButton');
const modal = document.getElementById('videoModal');
const closeButton = document.querySelector('.close');
const videoPlayer = document.getElementById('videoPlayer');

// Check if video player exists
if (!videoPlayer) {
    console.error('Video player element not found.');
}

// Function to open the modal
openButton.addEventListener('click', () => {
    modal.classList.add('modal-open'); // Use CSS class to show modal
    videoPlayer.play(); // Play video when modal opens
    openButton.disabled = true; // Disable the button
    modal.setAttribute('aria-hidden', 'false'); // Set ARIA attribute
});

// Function to close the modal
const closeModal = () => {
    modal.classList.remove('modal-open'); // Use CSS class to hide modal
    videoPlayer.pause(); // Pause video when modal closes
    videoPlayer.currentTime = 0; // Reset video to start
    openButton.disabled = false; // Re-enable the button
    modal.setAttribute('aria-hidden', 'true'); // Set ARIA attribute
};

// Close the modal when the 'x' button is clicked
closeButton.addEventListener('click', closeModal);

// Close the modal if the user clicks outside the content area
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close the modal with the Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('modal-open')) {
        closeModal();
    }
});

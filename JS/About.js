document.getElementById('darkenedImage').addEventListener('click', function() {
    const darkenedImage = document.getElementById('darkenedImage');
    const originalImage = document.getElementById('originalImage');
    darkenedImage.style.opacity = '0';
    
    
    setTimeout(function() {
        darkenedImage.style.display = 'none';
        originalImage.classList.remove('hidden');
        originalImage.style.opacity = '1'; // Ensure the original image is fully visible
    }, 200); // Match the transition duration
});
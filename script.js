function showMore() {
    // Get all the hidden items with the class 'more-images'
    const moreImages = document.querySelectorAll('.more-images');
    
    // Iterate over each hidden image and change its display property
    moreImages.forEach(image => {
        if (image.style.display === 'none' || image.style.display === '') {
            image.style.display = 'block';  // Show the image
        } else {
            image.style.display = 'none';  // Hide the image
        }
    });
    
    // Change the button text when clicked
    const button = document.querySelector('.show-more-btn');
    if (button.textContent === 'Show More') {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Show More';
    }
}

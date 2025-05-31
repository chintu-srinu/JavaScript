
// const wishButton = document.getElementById('wishButton');
//         const imageContainer = document.getElementById('imageContainer');
//         const inputModal = document.getElementById('inputModal');
//         const imageUrlInput = document.getElementById('imageUrl');
//         const addImageButton = document.getElementById('addImageButton');

//         let images = JSON.parse(localStorage.getItem('galleryImages')) || [];

//         function displayImages() {
//             imageContainer.innerHTML = ''; // Clear existing images
//             images.forEach(imageUrl => {
//                 const img = document.createElement('img');
//                 img.onload = () => {
//                     // Image loaded successfully
//                 };
//                 img.onerror = () => {
//                     console.error("Failed to load image:", imageUrl);
//                 };
//                 img.src = imageUrl;
//                 img.classList.add('gallery-image');
//                 imageContainer.appendChild(img);
//             });
//         }

//         function saveImages() {
//             localStorage.setItem('galleryImages', JSON.stringify(images));
//         }

//         wishButton.addEventListener('click', () => {
//             // Position the input modal next to the button
//             const buttonRect = wishButton.getBoundingClientRect();
//             inputModal.style.left = `${buttonRect.right + 10}px`;
//             inputModal.style.top = `${buttonRect.top}px`;
//             inputModal.style.display = 'block';
//         });

//         addImageButton.addEventListener('click', () => {
//             const url = imageUrlInput.value.trim();
//             if (url) {
//                 images.push(url);
//                 saveImages();
//                 displayImages();
//                 imageUrlInput.value = ''; // Clear the input
//                 inputModal.style.display = 'none'; // Hide the modal
//             } else {
//                 alert('Please enter a valid image URL.');
//             }
//         });

//         // Initially display any stored images
//         displayImages();










const wishButton = document.getElementById('wishButton');
const imageContainer = document.getElementById('imageContainer');
const inputModal = document.getElementById('inputModal');
const imageUrlInput = document.getElementById('imageUrl');
const addImageButton = document.getElementById('addImageButton');

let images = JSON.parse(localStorage.getItem('galleryImages')) || [];

function displayImages() {
    imageContainer.innerHTML = ''; // Clear existing images
    images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.onload = () => {
            // Image loaded successfully
        };
        img.onerror = () => {
            console.error("Failed to load image:", imageUrl);
        };
        img.src = imageUrl;
        img.classList.add('gallery-image');
        imageContainer.appendChild(img);
    });
}

function saveImages() {
    localStorage.setItem('galleryImages', JSON.stringify(images));
}

wishButton.addEventListener('click', () => {
    // Position the input modal next to the button
    const buttonRect = wishButton.getBoundingClientRect();
    inputModal.style.left = `${buttonRect.right + 10}px`;
    inputModal.style.top = `${buttonRect.top}px`;
    inputModal.style.display = 'block';
});

addImageButton.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    if (url) {
        images.push(url);
        saveImages();
        displayImages();
        imageUrlInput.value = ''; // Clear the input
        inputModal.style.display = 'none'; // Hide the modal
    } else {
        alert('Please enter a valid image URL.');
    }
});

// Initially display any stored images
displayImages();


    
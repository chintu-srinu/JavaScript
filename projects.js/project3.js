
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










// const wishButton = document.getElementById('wishButton');
// const imageContainer = document.getElementById('imageContainer');
// const inputModal = document.getElementById('inputModal');
// const imageUrlInput = document.getElementById('imageUrl');
// const addImageButton = document.getElementById('addImageButton');

// let images = JSON.parse(localStorage.getItem('galleryImages')) || [];

// function displayImages() {
//     imageContainer.innerHTML = ''; // Clear existing images
//     images.forEach(imageUrl => {
//         const img = document.createElement('img');
//         img.onload = () => {
//             // Image loaded successfully
//         };
//         img.onerror = () => {
//             console.error("Failed to load image:", imageUrl);
//         };
//         img.src = imageUrl;
//         img.classList.add('gallery-image');
//         imageContainer.appendChild(img);
//     });
// }

// function saveImages() {
//     localStorage.setItem('galleryImages', JSON.stringify(images));
// }

// wishButton.addEventListener('click', () => {
//     // Position the input modal next to the button
//     const buttonRect = wishButton.getBoundingClientRect();
//     inputModal.style.left = `${buttonRect.right + 10}px`;
//     inputModal.style.top = `${buttonRect.top}px`;
//     inputModal.style.display = 'block';
// });

// addImageButton.addEventListener('click', () => {
//     const url = imageUrlInput.value.trim();
//     if (url) {
//         images.push(url);
//         saveImages();
//         displayImages();
//         imageUrlInput.value = ''; // Clear the input
//         inputModal.style.display = 'none'; // Hide the modal
//     } else {
//         alert('Please enter a valid image URL.');
//     }
// });

// // Initially display any stored images
// displayImages();


    










// const wishButton = document.getElementById('wishButton');
// const imageContainer = document.getElementById('imageContainer');
// const inputModal = document.getElementById('inputModal');
// const imageUrlInput = document.getElementById('imageUrl');
// const addImageButton = document.getElementById('addImageButton');

// let images = JSON.parse(localStorage.getItem('galleryImages')) || [];

// // Display all images
// function displayImages() {
//   imageContainer.innerHTML = ''; // Clear previous

//   images.forEach((imageUrl, index) => {
//     const container = document.createElement('div');
//     container.className = 'image-item';

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     img.className = 'gallery-image';

//     // Edit button
//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.onclick = () => {
//       const newUrl = prompt('Enter new image URL:', imageUrl);
//       if (newUrl) {
//         images[index] = newUrl.trim();
//         saveImages();
//         displayImages();
//       }
//     };

//     // Delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.onclick = () => {
//       if (confirm('Delete this image?')) {
//         images.splice(index, 1);
//         saveImages();
//         displayImages();
//       }
//     };

//     container.appendChild(img);
//     container.appendChild(editBtn);
//     container.appendChild(deleteBtn);
//     imageContainer.appendChild(container);
//   });
// }

// // Save to localStorage
// function saveImages() {
//   localStorage.setItem('galleryImages', JSON.stringify(images));
// }

// // Show input modal
// wishButton.addEventListener('click', () => {
//   const buttonRect = wishButton.getBoundingClientRect();
//   inputModal.style.left = `${buttonRect.left}px`;
//   inputModal.style.top = `${buttonRect.bottom + 5}px`;
//   inputModal.style.display = 'block';
// });

// // Add new image
// addImageButton.addEventListener('click', () => {
//   const url = imageUrlInput.value.trim();
//   if (url) {
//     images.push(url);
//     saveImages();
//     displayImages();
//     imageUrlInput.value = '';
//     inputModal.style.display = 'none';
//   } else {
//     alert('Please enter a valid image URL.');
//   }
// });

// // Initial load
// displayImages();
















// const wishButton = document.getElementById('wishButton');
// const imageContainer = document.getElementById('imageContainer');
// const inputModal = document.getElementById('inputModal');
// const imageUrlInput = document.getElementById('imageUrl');
// const addImageButton = document.getElementById('addImageButton');
// const editSelected = document.getElementById('editSelected');
// const deleteSelected = document.getElementById('deleteSelected');

// let images = JSON.parse(localStorage.getItem('galleryImages')) || [];
// let selectedIndex = null;

// // Display images with selection feature
// function displayImages() {
//   imageContainer.innerHTML = '';

//   images.forEach((imageUrl, index) => {
//     const container = document.createElement('div');
//     container.className = 'image-item';
//     container.style.border = index === selectedIndex ? '2px solid blue' : '1px solid #ccc';

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     img.className = 'gallery-image';
//     img.onclick = () => {
//       selectedIndex = index;
//       displayImages(); // re-render to show selection
//     };

//     container.appendChild(img);
//     imageContainer.appendChild(container);
//   });
// }

// // Save images to localStorage
// function saveImages() {
//   localStorage.setItem('galleryImages', JSON.stringify(images));
// }

// // Show input modal
// wishButton.addEventListener('click', () => {
//   const buttonRect = wishButton.getBoundingClientRect();
//   inputModal.style.left = `${buttonRect.left}px`;
//   inputModal.style.top = `${buttonRect.bottom + 5}px`;
//   inputModal.style.display = 'block';
// });

// // Add image
// addImageButton.addEventListener('click', () => {
//   const url = imageUrlInput.value.trim();
//   if (url) {
//     images.push(url);
//     saveImages();
//     displayImages();
//     imageUrlInput.value = '';
//     inputModal.style.display = 'none';
//   } else {
//     alert('Please enter a valid image URL.');
//   }
// });

// // Edit selected image
// editSelected.addEventListener('click', () => {
//   if (selectedIndex !== null) {
//     const newUrl = prompt('Enter new image URL:', images[selectedIndex]);
//     if (newUrl) {
//       images[selectedIndex] = newUrl.trim();
//       saveImages();
//       displayImages();
//     }
//   } else {
//     alert('Please select an image to edit.');
//   }
// });

// // Delete selected image
// deleteSelected.addEventListener('click', () => {
//   if (selectedIndex !== null) {
//     if (confirm('Delete selected image?')) {
//       images.splice(selectedIndex, 1);
//       selectedIndex = null;
//       saveImages();
//       displayImages();
//     }
//   } else {
//     alert('Please select an image to delete.');
//   }
// });

// // Initial display
// displayImages();












const wishButton = document.getElementById('wishButton');
const imageContainer = document.getElementById('imageContainer');
const inputModal = document.getElementById('inputModal');
const imageUrlInput = document.getElementById('imageUrl');
const addImageButton = document.getElementById('addImageButton');
const editSelected = document.getElementById('editSelected');
const deleteSelected = document.getElementById('deleteSelected');

let images = JSON.parse(localStorage.getItem('galleryImages')) || [];
let selectedIndex = null;

// Display all images from localStorage
function displayImages() {
  imageContainer.innerHTML = '';

  images.forEach((url, index) => {
    const container = document.createElement('div');
    container.className = 'image-item';
    if (index === selectedIndex) container.classList.add('selected');

    const img = document.createElement('img');
    img.src = url;
    img.className = 'gallery-image';

    // Select image on click
    container.addEventListener('click', () => {
      selectedIndex = index;
      displayImages();
    });

    container.appendChild(img);
    imageContainer.appendChild(container);
  });
}

// Save images to localStorage
function saveImages() {
  localStorage.setItem('galleryImages', JSON.stringify(images));
}

// Show input modal
wishButton.addEventListener('click', () => {
  inputModal.style.display = 'block';
});

// Add image
addImageButton.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    images.push(url);
    saveImages();
    imageUrlInput.value = '';
    inputModal.style.display = 'none';
    displayImages();
  } else {
    alert('Please enter a valid image URL.');
  }
});

// Edit selected image
editSelected.addEventListener('click', () => {
  if (selectedIndex !== null) {
    const newUrl = prompt('Enter new image URL:', images[selectedIndex]);
    if (newUrl) {
      images[selectedIndex] = newUrl.trim();
      saveImages();
      displayImages();
    }
  } else {
    alert('Please select an image to edit.');
  }
});

// Delete selected image
deleteSelected.addEventListener('click', () => {
  if (selectedIndex !== null) {
    if (confirm('Delete selected image?')) {
      images.splice(selectedIndex, 1);
      selectedIndex = null;
      saveImages();
      displayImages();
    }
  } else {
    alert('Please select an image to delete.');
  }
});

// ✅ Load images immediately on page load
window.addEventListener('DOMContentLoaded', () => {
  displayImages();
});

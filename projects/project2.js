// 
window.onload = updateUI;
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const linkInput = document.getElementById('link');
    const pasteButton = document.getElementById('pasteButton');
    const errorMessage = document.getElementById('error');
    const productForm = document.getElementById('productForm');
    const offcanvasElement = document.getElementById('offcanvasTop');
    
    // Add click event listener to the paste button
    // pasteButton.addEventListener('submit', async function() {
    //     try {
    //         // Try to access clipboard API
    //         const text = await navigator.clipboard.readText();
    //         // Set the input value to the clipboard content
    //         linkInput.value = text;
    //         // Validate the pasted URL
    //         validateAndSubmit();
    //     } catch (err) {
    //         console.error('Failed to read clipboard contents: ', err);
    //         // If clipboard access fails, validate whatever is in the input
    //         validateAndSubmit();
    //     }
    // });
    
    // Add submit event listener to the form
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateAndSubmit();
    });  
    // Validate input URL and submit if valid
    function validateAndSubmit() {
        const linkValue = linkInput.value.trim();
        
        // URL validation regex - checks for proper URL format
        const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;
        
        if (!linkValue) {
            // Display error if input is empty
            errorMessage.textContent = "Please enter a product link";
            errorMessage.style.display = 'block';
            return false;
        } else if (!urlPattern.test(linkValue)) {
            // Display error if URL is invalid
            errorMessage.textContent = "Please use a valid URL";
            errorMessage.style.display = 'block';
            return false;
        } else {
            // Hide error and submit the form
            errorMessage.style.display = 'none';
            submitProductLink(linkValue);
            return true;
        }
    }
    
    // Function to handle the actual form submission
    function submitProductLink(url) {
        console.log("Product link submitted:", url);
        
        // THIS IS WHERE YOU WOULD SEND THE LINK TO YOUR SERVER
        // Example AJAX request:
        
        fetch('https://your-api-endpoint.com/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productUrl: url
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Clear form and close offcanvas on success
            linkInput.value = '';
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        })
        .catch((error) => {
            console.error('Error:', error);
            errorMessage.textContent = "Failed to submit. Please try again.";
            errorMessage.style.display = 'block';
        });
        
        
        // For demo purposes, just show an alert
        alert("Product link successfully added: " + url);
        
        // Clear the input field
        linkInput.value = '';
        
        // Close the offcanvas after successful submission
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-tabs .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const loaderScreens = {
        'friends': document.getElementById('spinner-loader'),
        'request': document.getElementById('dots-loader'),
        'suggested': document.getElementById('pulse-loader'),
        'creators': document.getElementById('bar-loader')
    };
    const emptyState = document.getElementById('empty-state');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = this.getAttribute('data-tab');

            // Hide all tab contents, loader screens, and empty state
            tabContents.forEach(content => content.classList.remove('active'));
            Object.values(loaderScreens).forEach(loader => loader.classList.remove('active'));
            emptyState.classList.remove('active');
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');

            // Show the corresponding loader screen
            if (loaderScreens[tabName]) {
                loaderScreens[tabName].classList.add('active');

                // Simulate loading (replace with your actual data fetching)
                setTimeout(() => {
                    loaderScreens[tabName].classList.remove('active');
                    const activeContent = document.getElementById(`${tabName}-content`);
                    if (activeContent) {
                        activeContent.classList.add('active');
                        // You would typically check if data was loaded and show emptyState if not
                        // For this example, we always show the default message in the tab content
                    } else {
                        emptyState.classList.add('active');
                    }
                }, 1500); // Adjust the timeout as needed
            } else {
                // If no loader is defined, just show the content or empty state immediately
                const activeContent = document.getElementById(`${tabName}-content`);
                if (activeContent) {
                    activeContent.classList.add('active');
                    // Again, you'd handle the empty state based on your data
                } else {
                    emptyState.classList.add('active');
                }
            }
        });
    });

    // Initially show the 'friends' tab content
    const initialTab = document.querySelector('.nav-tabs .nav-link.active');
    if (initialTab) {
        const initialTabName = initialTab.getAttribute('data-tab');
        const initialContent = document.getElementById(`${initialTabName}-content`);
        if (initialContent) {
            initialContent.classList.add('active');
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const offcanvasBottom = document.getElementById('offcanvasBottom');
    const notificationLoader = document.getElementById('notification-loader');
    const noNotifications = document.getElementById('no-notifications');
    const notificationList = document.getElementById('notification-list');
    const notificationBadge = document.getElementById('notification-badge');

    offcanvasBottom.addEventListener('show.bs.offcanvas', function() {
        // Show loading screen when the offcanvas is shown
        notificationLoader.classList.add('active');
        noNotifications.style.display = 'none';
        notificationList.style.display = 'none';
        notificationBadge.style.display = 'none'; // Hide badge when opening

        // Simulate fetching notifications (replace with your actual API call)
        setTimeout(() => {
            notificationLoader.classList.remove('active');

            // Simulate no new notifications
            const hasNewNotifications = false; // Replace with your actual check

            if (hasNewNotifications) {
                // In a real scenario, you would populate the notificationList here
                // Example:
                // const newNotifications = [{ title: '...', message: '...' }];
                // newNotifications.forEach(notif => {
                //     const listItem = document.createElement('li');
                //     listItem.classList.add('list-group-item');
                //     listItem.innerHTML = `<h6>${notif.title}</h6><p>${notif.message}</p>`;
                //     notificationList.appendChild(listItem);
                // });
                notificationList.style.display = 'block';
                notificationBadge.textContent = '1'; // Update badge count
                notificationBadge.style.display = 'inline-block';
            } else {
                noNotifications.style.display = 'block';
            }
        }, 1500); // Simulate loading time
    });

    // Optional: You might want to update the badge count periodically
    // Example:
    // setInterval(() => {
    //     // Fetch and update notification count
    //     const newCount = fetchNewNotificationCount();
    //     if (newCount > 0) {
    //         notificationBadge.textContent = newCount;
    //         notificationBadge.style.display = 'inline-block';
    //     } else {
    //         notificationBadge.style.display = 'none';
    //     }
    // }, 5000);
});

// document.addEventListener('DOMContentLoaded', () => {
//   const usernameDisplay = document.getElementById('offcanvasUsername');
//   const username = localStorage.getItem('username'); // Assuming 'username' is the key

//   if (username) {
//       usernameDisplay.textContent = username;
//   } else {
//       usernameDisplay.textContent = 'updateUI()'; // Or some default text
//   }

//   const menuLinks = document.querySelectorAll('.menu-link');
//   const contentDisplay = document.getElementById('content-display');

//   menuLinks.forEach(link => {
//       link.addEventListener('click', (event) => {
//           event.preventDefault(); // Prevent default link behavior
//           const message = link.getAttribute('data-content');
//           contentDisplay.textContent = message;
//       });
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const usernameDisplay = document.getElementById('offcanvasUsername');
  const username = localStorage.getItem('username'); // Assuming 'username' is the key

  if (username) {
      usernameDisplay.textContent = username;
  } else {
      usernameDisplay.textContent = 'srinu'; // Or some default text
  }

  const menuLinks = document.querySelectorAll('.menu-link');
  const contentDisplay = document.getElementById('content-display');

  menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          const message = link.getAttribute('data-content');
          contentDisplay.textContent = message;
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const copyLinkButton = document.querySelector('.copy-link');

  if (copyLinkButton) {
    copyLinkButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const currentURL = window.location.href;

      navigator.clipboard.writeText(currentURL)
        .then(() => {
          alert('Link copied to clipboard!'); // Provide feedback to the user
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          alert('Failed to copy link.');
        });
    });
  }

  // Replace '[YOUR_PAGE_URL]' with the actual URL dynamically if needed
  const facebookShareLink = document.querySelector('a[href*="facebook.com/sharer"]');
  if (facebookShareLink) {
    const currentPageURL = window.location.href;
    facebookShareLink.href = facebookShareLink.href.replace('[YOUR_PAGE_URL]', encodeURIComponent(currentPageURL));
  }

  const emailShareLink = document.querySelector('a[href^="mailto:"]');
  if (emailShareLink) {
    const currentPageURL = window.location.href;
    emailShareLink.href = emailShareLink.href.replace('[YOUR_PAGE_URL]', encodeURIComponent(currentPageURL));
  }

  // You'll need to implement the logic for Gowish and QR code sharing here.
});
   function validateInput(){
    // let inputLink=document.getElementById('link')
    // console.log(`"${inputLink.value}"`)
    // displayImage(inputLink.value)
    const inputLink = document.getElementById('link').value;
    localStorage.setItem('productLink', inputLink); // Store link
    window.location.href = 'project3.html';   

  }
  function displayImage(link){
    let image=document.createElement('img')
    image.src=`${link}`
    console.log(image)
    document.body.append(image)
  }

  function updateUI() {
    const display = document.getElementById("userDisplay");
    const loginForm = document.getElementById("loginForm");
    const display2 = document.getElementById("display2");
  
    console.log('jaibalayya'); // You might want to remove or change this log in production
  
    // Retrieve the user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
  
    // Check if there is a valid user object
    if (userData && userData.username && userData.username.trim() !== "") {
      // Display username
      display2.innerText = userData.username;  // Display the username if user is logged in
  
      // Hide login form
    //   loginForm.style.display = "none"; // Hide the login form if the user is logged in
      display.style.display = "block"; // Ensure the display container is visible
  
    } else {
      // Display 'Guest' if user is not logged in
      display2.innerText = "Guest";
  
      // Show login form if user is not logged in
      loginForm.style.display = "block";  // Show the login form if no user is logged in
      display.style.display = "none"; // Hide the user display section
    }
  }
  
  // Call updateUI when the page loads or when needed
  window.onload = updateUI;
  

  document.getElementById("submit-btn").addEventListener("click", function () {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user !== "") {
      localStorage.setItem("username", user);
      updateUI();
    } else {
      alert("Please enter a username.");
    }
  });

  window.onload = updateUI;
 
  

  // document.addEventListener('DOMContentLoaded', function() {
  //   const createWishlistBtn = document.getElementById('submit-btn');
  //   const offcanvasElement = document.getElementById('offcanvasScrolling');
  //   const offcanvasBody = offcanvasElement.querySelector('.offcanvas-body');
  //   const wishlistContainer = document.createElement('div');
  //   wishlistContainer.classList.add('wishlist-container');
  //   offcanvasElement.parentNode.insertBefore(wishlistContainer, offcanvasElement.nextSibling);
  
  //   if (createWishlistBtn) {
  //     createWishlistBtn.addEventListener('click', function() {
  //       const wishlistNameInput = offcanvasBody.querySelector('input[type="text"]');
  //       const wishlistName = wishlistNameInput ? wishlistNameInput.value.trim() : '';
  
  //       if (wishlistName) {
  //         const newWishlistDiv = document.createElement('div');
  //         newWishlistDiv.classList.add('wishlist-item');
  //         newWishlistDiv.innerHTML = `
  //           <p>Wishlist: ${wishlistName}</p>
  //           <button class="delete-wishlist">Delete</button>
  //         `;
  
  //         wishlistContainer.appendChild(newWishlistDiv);
  
  //         if (wishlistNameInput) {
  //           wishlistNameInput.value = '';
  //         }
  
  //         const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  //         if (bsOffcanvas) {
  //           bsOffcanvas.hide();
  //         }
  
  //         // Display the success message *after* the wishlist is added to the DOM
  //         alert('New wishlist created!');
  //       } else {
  //         alert('Please enter a name for your wishlist.');
  //       }
  //     });
  
  //     wishlistContainer.addEventListener('click', function(event) {
  //       if (event.target.classList.contains('delete-wishlist')) {
  //         const wishlistToDelete = event.target.parentNode;
  //         wishlistContainer.removeChild(wishlistToDelete);
  //       }
  //     });
  //   }
  // });

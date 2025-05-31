
// // ------------------------------------------------------------------------------------------------------------------------
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4-KuRfSEIzwcfA9n6QMeLEbve7M9xxBU",
//   authDomain: "login---sign-project.firebaseapp.com",
//   projectId: "login---sign-project",
//   storageBucket: "login---sign-project.firebasestorage.app",
//   messagingSenderId: "32676315145",
//   appId: "1:32676315145:web:32a404cfb9bf07723838d8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

//   // Handle login
// document.getElementById("submit-btn").addEventListener("click", () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email)
//   console.log(password)

//   // if (!email || !password) {
//   //   alert("Please enter both email and password.");
//   //   return;
//   // }

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       alert("Login successful!");
//       const user = userCredential.user;
//       const username = user.displayName;
//       console.log(username)
//       console.log(user)
//       window.location.assign("project2.html");
//       localStorage.setItem("user", JSON.stringify({
//         email: user.email,
//         uid: user.uid,
//         username : user.displayName
//       }));
//     })
//     .catch((error) => {
//       console.error("Login failed:", error.message);
//       alert("Login failed: " + error.message);
//     });
// });



// // Signup event listener
// document.getElementById("submit-btn2").addEventListener("click", (e) => {
//   e.preventDefault()
//   const username = document.getElementById("username2").value;
//   const email = document.getElementById("email2").value;
//   const password = document.getElementById("password2").value;
//   console.log(username,password)
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       let user = userCredential.user
//       return updateProfile(user, {
//         displayName: username
//       }).then(() => {
//         alert("Successfully created account with username!");
//         console.log("Username set:", user.displayName);
//       });
//     })
//     .then(() => {
//       alert("Signup successful!");
//       console.log("User created:", auth.currentUser);
//       // Optional: redirect or clear form
//     })
//     .catch((error) => {
//       console.error("Signup error:", error.message);
//       alert("Signup failed: " + error.message);
//     });
// });
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4-KuRfSEIzwcfA9n6QMeLEbve7M9xxBU",
//   authDomain: "login---sign-project.firebaseapp.com",
//   projectId: "login---sign-project",
//   storageBucket: "login---sign-project.firebasestorage.app",
//   messagingSenderId: "32676315145",
//   appId: "1:32676315145:web:32a404cfb9bf07723838d8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Handle login
// document.getElementById("submit-btn").addEventListener("click", () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   console.log(email);
//   console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       alert("Login successful!");
//       const user = userCredential.user;
//       const username = user.displayName;
//       console.log(username);
//       console.log(user);
//       window.location.assign("project2.html");
//       localStorage.setItem("user", JSON.stringify({
//         email: user.email,
//         uid: user.uid,
//         username: user.displayName
//       }));
//     })
//     .catch((error) => {
//       console.error("Login failed:", error.message);
//       alert("Login failed: " + error.message);
//     });
// });

// // Signup event listener
// document.getElementById("submit-btn2").addEventListener("click", (e) => {
//   e.preventDefault();
//   const username = document.getElementById("username2").value;
//   const email = document.getElementById("email2").value;
//   const password = document.getElementById("password2").value;

//   console.log(username, password);

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       let user = userCredential.user;
//       return updateProfile(user, {
//         displayName: username
//       }).then(() => {
//         alert("Successfully created account with username!");
//         console.log("Username set:", user.displayName);
//       });
//     })
//     .then(() => {
//       alert("Signup successful! Redirecting to login...");
//       console.log("User created:", auth.currentUser);
//       // Redirect to the login page after the alert is closed
//       setTimeout(() => {
//         window.location.assign("project1.html");
//       }, 10); // A small delay to ensure the alert is visible
//     })
//     .catch((error) => {
//       console.error("Signup error:", error.message);
//       alert("Signup failed: " + error.message);
//     });
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4-KuRfSEIzwcfA9n6QMeLEbve7M9xxBU",
  authDomain: "login---sign-project.firebaseapp.com",
  projectId: "login---sign-project",
  storageBucket: "login---sign-project.firebasestorage.app",
  messagingSenderId: "32676315145",
  appId: "1:32676315145:web:32a404cfb9bf07723838d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  // Handle login
document.getElementById("submit-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email)
  console.log(password)

  // if (!email || !password) {
  //   alert("Please enter both email and password.");
  //   return;
  // }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      const user = userCredential.user;
      const username = user.displayName;
      console.log(username)
      console.log(user)
      window.location.assign("project2.html");
      localStorage.setItem("user", JSON.stringify({
        email: user.email,
        uid: user.uid,
        username : user.displayName
      }));
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    });
});



// Signup event listener
document.getElementById("submit-btn2").addEventListener("click", (e) => {
  e.preventDefault()
  const username = document.getElementById("username2").value;
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;
  console.log(username,password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user
      return updateProfile(user, {
        displayName: username
      }).then(() => {
        alert("Successfully created account with username!");
        console.log("Username set:", user.displayName);
      });
    })
    .then(() => {
      alert("Signup successful!");
      console.log("User created:", auth.currentUser);
      // Optional: redirect or clear form
      // window.location = "/login.html";
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
      alert("Signup failed: " + error.message);
    });
});
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.innerText = "All fields are required";
    return false;
  }

  if (!email.includes("@")) {
    error.innerText = "Please enter a valid email";
    return false;
  }

  alert("Message sent successfully!");
  error.innerText = "";
  return true;
}

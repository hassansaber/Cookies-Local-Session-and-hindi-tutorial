localStorage.setItem("name", "bob");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");

// ---------------

sessionStorage.setItem("name", "bob");

console.log(sessionStorage.getItem("name"));

sessionStorage.removeItem("name", "bob");

// update
sessionStorage.setItem("name", "ali");

//-----------------------

document.cookie = "name=ali; expires=" + new Date(2020, 0, 1).toUTCString();
document.cookie =
  "lastName=javadi; expires=" + new Date(2020, 0, 1).toUTCString();

console.log(document.cookie);

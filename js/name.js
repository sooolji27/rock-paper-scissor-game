document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    localStorage.setItem('username', name);
    window.location.href = "game.html";
   });

let username = localStorage.getItem('username');

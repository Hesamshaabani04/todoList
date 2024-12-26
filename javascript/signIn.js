const eyeIcon = document.getElementById("eye")
const passwordInput = document.getElementById("pass")
eye.addEventListener("click", function(){
const type = passwordInput.getAttribute("type") === "password" ? "text": "password";
passwordInput.setAttribute("type",type)
}
)
document.querySelector('.actionbtn').addEventListener('click',function(event){
    event.preventDefault();
    location.href = '../html/login.html'    
})
//EYE ICON
let eyeIcon = document.getElementById("eye")
let passwordInput = document.getElementById("pass")
eye.addEventListener("click", function(){
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type",type)
}
)


// let password = document.getElementById("pass");
let userName = document.getElementById("user");
let logINBtn = document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    console.log(userName.value);
    console.log(passwordInput.value)
    let x;
    userName.value == 'admin'? x = true : x = false;
    let y ;
    passwordInput.value == 'admin'? y = true : y = false;
    console.log(x)
    console.log(y)
    if ( x||y ){
        location.href = '../html/todomain.html'        
    }
    else{
        document.querySelector('.warningContainer').style.display = 'flex';
     }
    })
document.querySelector('.wrnBtn').addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.warningContainer').style.display = 'none';
    location.reload();
})
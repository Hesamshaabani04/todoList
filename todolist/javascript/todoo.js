// let navUl = document.querySelector('.navUl')
let leftMenu = document.querySelector('.leftSideNavContainer')
let hamMenu = document.querySelector('.hambergerMenu').addEventListener('click',function(event){
    if(leftMenu.style.display == 'none'){
        leftMenu.style.display = 'flex' ; 
    }else{
        leftMenu.style.display = 'none';
    }

})
let todoUl = document.querySelector('.todoListMain')
let todo= document.querySelector('.inputTodo');
let addBtn= document.querySelector('.addBtn');
let listcont = document.createElement('div')
let newTodo = document.createElement('li');
let checkBtn = document.createElement('button');
let deleteBtn = document.createElement('button');
    addBtn.addEventListener('click', addList)
    function addList(){
        newTodo.classList.add('liItem')
        newTodo.innerText = todo.value;
        checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
        deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>'
        listcont.classList.add('lis')
        listcont.appendChild(newTodo);
        listcont.appendChild(checkBtn);
        listcont.appendChild(deleteBtn);
        todoUl.appendChild(listcont);
        listcont.style.display = 'flex'
        
    }
    checkBtn
    deleteBtn.addEventListener('click' , deletefunc )
    function deletefunc(event){
        event.preventDefault();
        listcont.style.display = 'none'
    }
//  PROBLEMS:
// 1)nav bar it wont disapear while screen > 900 and i clicked on hamMenu
// 2)if todo is empty alert continiues to show up

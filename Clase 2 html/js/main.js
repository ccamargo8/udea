<<<<<<< HEAD
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(' .my-form button');

checkbox.addEventListener("change",function(){
    const checked=this.checked;
    for (const btn of btns) {
        checked ? (btn.disabled = false) : (btn.disabled = true);
    }
});
=======
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(' .my-form button');

checkbox.addEventListener("change",function(){
    const checked=this.checked;
    for (const btn of btns) {
        checked ? (btn.disabled = false) : (btn.disabled = true);
    }
});
>>>>>>> dead3bc60c79b0c372082dc222fbfbda1a6b07a2

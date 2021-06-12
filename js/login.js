// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('login-click').addEventListener('click', () => {
    document.getElementById('id01').style.display = 'block';
})

document.getElementById('avatar-span').addEventListener('click', () => {
    document.getElementById('id01').style.display = 'none';
})

document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('id01').style.display = 'none';
})
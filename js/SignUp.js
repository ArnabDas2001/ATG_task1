document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'block';
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
});

function flip(){
    document.getElementById("form").style.
        transform='rotateY(180deg)';
}
function flip1(){
    document.getElementById("form").style.
        transform='rotateY(0deg)';
}

function flip(){
    document.getElementById("form").style.
    transform='rotateY(180deg)';
}

document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('account').style.opacity = 0;
    document.getElementById('accountCreated').style.display = 'flex';
});

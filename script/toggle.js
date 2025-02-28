document.getElementById('toggle1').addEventListener('click', function(){
    document.getElementById('card').style.display = "block";
    document.getElementById('history').style.display = "none";
    document.getElementById('toggle1').style.background = 'red';
    document.getElementById('toggle2').style.background = 'none'
})

document.getElementById('toggle2').addEventListener('click', function(){
    document.getElementById('card').style.display = "none";
    document.getElementById('history').style.display = "block";
    document.getElementById('toggle1').style.background = 'none';
    document.getElementById('toggle2').style.background = 'red'
})
let width = window.innerWidth;
let height = window.innerHeight;
window.addEventListener('mousemove', function (e){
    if (e.x < width/2 && e.y < height/2){
        document.getElementById('left-top').classList.add('left-top');
    } else document.getElementById('left-top').classList.remove('left-top');
    if (e.x > width/2 && e.y < height/2){
        document.getElementById('right-top').classList.add('right-top');
    } else document.getElementById('right-top').classList.remove('right-top');
    if (e.x < width/2 && e.y > height/2){
        document.getElementById('left-bottom').classList.add('left-bottom');
    } else document.getElementById('left-bottom').classList.remove('left-bottom');
    if (e.x > width/2 && e.y > height/2){
        document.getElementById('right-bottom').classList.add('right-bottom');
    } else document.getElementById('right-bottom').classList.remove('right-bottom');


    //     if(e.x > width/2 && e.y < height/2){
    //     document.getElementsByClassName('body')[0].classList.remove('left-top').remove('left-bottom').remove('right-bottom').add('right-top');
    // } else if(e.x < width/2 && e.y > height/2){
    //     document.getElementsByClassName('body')[0].classList.remove('left-top').remove('right-top').remove('right-bottom').add('left-bottom');
    // } else if (e.x > width/2 && e.y > height/2){
    //     document.getElementsByClassName('body')[0].classList.remove('left-top').remove('right-top').remove('left-bottom').add('right-bottom');
    // }
    // else { console.log(e.x)}

});

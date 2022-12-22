const colors=["green","red","rgba(133,122,200)","#f15025","blue","pink","yellow"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    // console.log(document.body);
    // Get random number between 0 and 3 colors[1]
    const randomNumber=getrandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(getrandomNumber());
});

function getrandomNumber(){
    return Math.floor(Math.random()*colors.length); 
}
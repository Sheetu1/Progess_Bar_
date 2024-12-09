let btn = document.querySelector('.card .percent button');
let growth = document.querySelector('.card #progress .growth');
let h2 = document.querySelector('.card .percent h2');

let grow = 0;
btn.addEventListener('click',function(){
   let int =  setInterval(function(){
        grow++;
        h2.innerHTML = `${grow}%`;
        growth.style.width = `${grow}%`;
        btn.innerHTML = "Downloading..." 

    },60)
    setTimeout(function(){
        clearInterval(int);
    btn.innerHTML = "Downloaded"
    },6000);
})

















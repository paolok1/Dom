let p = document.querySelectorAll('p');

console.dir(p);

let h1 = document.querySelector('h1');



let changeColor = document.querySelector('#changeColor');
changeColor.addEventListener('click', ()=>{
    p.forEach((paragrafo)=>{
        let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let blu = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        paragrafo.style.color = `rgb(${red}, ${green}, ${blu})`
        });
} );

let bold = document.querySelector('#bold');
bold.addEventListener('click', ()=>{
    p.forEach((paragrafo)=>{
    paragrafo.style.fontWeight = 'bold';
 })
 
});


let show_hide = document.querySelector('#show_hide');
show_hide.addEventListener('click', ()=>{
    p.forEach((paragrafo)=>{
        if(paragrafo.style.display == 'block'){
            paragrafo.style.display = 'none'
        }else {
            paragrafo.style.display = 'block'
        }

        
    
})

});








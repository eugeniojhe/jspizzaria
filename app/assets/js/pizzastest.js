/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});


/*
    author: Eugenio April 2020 

*/



/*const f = (el)=> {
    return document.querySelector(el); 
}*/

//Modal functions 
const cm = ()=>{
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    },500) 
};

//Products functions 
const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);
let qtOrderedPizza; 
//Products lists  
dataPizzaJson.map((data,index)=>{
    //let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //document.querySelector('.pizza-area').append(pizzaItem);  
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key',index); 
    pizzaItem.querySelector('.pizza-item--img img').src = data.img; 
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${data.prices[1].toFixed(2)}`; 
    pizzaItem.querySelector('.pizza-item--name').innerHTML = data.name; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = data.description;
    qs('.pizza-area').append(pizzaItem);
    pizzaItem.querySelector('a').addEventListener('click',(ev)=>{
        ev.preventDefault();
        qtOrderedPizza = 1; 
        let key = ev.target.closest('.pizza-item').getAttribute('data-key');
        //Comment: Line commented about is another way 
        //         by putting product name into html 
       // qs('.pizzaInfo h1').innerHTML = dataPizzaJson[key].name; 
        qs('.pizzaInfo h1').innerHTML = data.name;
        qs('.pizzaInfo--desc').innerHTML = data.description; 
        qs('.pizzaBig img').src = data.img; 
        qs('.pizzaInfo--actualPrice').innerHTML = ` R$ ${data.prices[1].toFixed(2)}`; 
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        qsa('.pizzaInfo--size').forEach((weight,index)=>{
            if (index == 2){
                weight.classList.add('selected'); 
            }
            weight.querySelector('span').innerHTML = data.weights[index]; 
        });
        qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza; 
        qs('.pizzaWindowArea').style.opacity = 0; 
        qs('.pizzaWindowArea').style.display = 'flex'; 
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = 1; 
        },200);
    });      
});

//That will select butons "cancel" and "return"
//and add event click 


qsa('.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton').forEach((data)=>{
    /*
      On click event call arrow function cm
      to close modal window 
    */
    data.addEventListener('click',cm) ; 
});

qs('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (qtOrderedPizza > 1){
        qtOrderedPizza--; 
    }
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qs('.pizzaInfo--qtmais').addEventListener('click',()=>{
    qtOrderedPizza++;
    qs('.pizzaInfo--qt').innerHTML = qtOrderedPizza;   
});

qsa('.pizzaInfo--size').forEach((weight,index)=>
{
     weight.addEventListener('click',(e)=>
     {
         qs('.pizzaInfo--size.selected').classList.remove('selected'); 
         e.target.classList.add('selected');
     });   
});




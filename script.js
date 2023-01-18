const imgs=document.querySelectorAll('.img a');
let imgId=1;

const imgDiv=document.querySelectorAll('.img');

imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId=img.dataset.id;
       
imgDiv.forEach((img)=>{
    img.classList.remove('active');
})
    img.parentElement.classList.add('active');
    
    moveImage();
   })
})


function moveImage()
{
    const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
    let width=(imgId-1)*imgWidth;
    document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;

}

const stars=document.querySelectorAll('.star');
const current_rating=document.querySelector('.current-rat');
stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_star=index+1;
        current_rating.innerText=`${current_star} of 5`;

        stars.forEach((star,i)=>{
            if(current_star>=i+1){
                star.innerHTML=`&#9733`;
            }else{
                star.innerHTML=`&#9734`;
            }
        })
    })
})

const minusBtn=document.querySelector('.minus');
const plusBtn=document.querySelector('.plus');
const qtyTxt=document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
    let qty=parseInt(qtyTxt.value);
    if(qty>0){
        qty--;
        qtyTxt.value=qty;
    }

});

plusBtn.addEventListener('click',()=>{
    let qty=parseInt(qtyTxt.value);
    if(qty>=0 && qty<5){
        qty++;
        qtyTxt.value=qty;
    }

});


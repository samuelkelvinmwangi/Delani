//Portfolio settings
const lightbox=document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxClose = lightbox.querySelector(".lightbox-close"),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
   portfolioItems[i].addEventListener("click",function(){
       itemIndex=i;
       changeItem();
       toggleLightbox();
   }) 
}
function nextItem(){
    if (itemIndex==totalPortfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++
    }
    changeItem();
}

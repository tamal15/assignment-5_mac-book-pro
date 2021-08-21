function macPro(priceId,prices){
    const priceField=document.getElementById(priceId);
    priceField.innerText=prices;


    total();

}

 
function total(){
    let memoryCost=document.getElementById('extra-memory');
    let newMemoryCost=parseInt(memoryCost.innerText);
    let storageCost=document.getElementById('extra-storage');
    let newStorageCost=parseInt(storageCost.innerText);
    let deliveryCost=document.getElementById('delivery-charge');
    let newDeliveryCost=parseInt(deliveryCost.innerText);

    let totalAccount= (newMemoryCost + newStorageCost + newDeliveryCost)+1299;
    const totalBil=document.getElementById('total-prices');
    totalBil.innerText=totalAccount;


    const discountOffer=document.getElementById('promo-code');
    discountOffer.innerText=totalAccount;
   

}

function cuponCode(){
    let count=0;
    const button=document.getElementById('pr')
}



document.getElementById('unified').addEventListener('click',
function(){
   macPro('extra-memory',0);
//    total('extra-memory',100)
});
document.getElementById('unified memory').addEventListener('click',
function(){
   macPro('extra-memory',180)
//    total('extra-memory',50);
});

// storage 
document.getElementById('first-storage').addEventListener('click',
function(){
    macPro('extra-storage',0)
    // total('extra-storage',10)
});
document.getElementById('second-storage').addEventListener('click',
function(){
    macPro('extra-storage',100)
});
document.getElementById('third-storage').addEventListener('click',
function(){
    macPro('extra-storage',180)
});

// delivery 
document.getElementById('first-delivery').addEventListener('click',
function(){
   macPro('delivery-charge',0)
});
document.getElementById('second-delivery').addEventListener('click',
function(){
   macPro('delivery-charge',20)
});



document.getElementById('promo').addEventListener('click',
function(){
    const undateInputField=document.getElementById('promo-text');
    const inputTexts=undateInputField.value;
    undateInputField.value='';
    if(inputTexts == 'stevekaku'){
        const totalCount=document.getElementById('promo-code');
        const countText=parseFloat(totalCount.innerText);
        const totalValues=(countText * 20)/100;
        const updateDiscount= countText - totalValues;
        totalCount.innerText=updateDiscount;
        const success=document.getElementById('success');
        success.style.display='block';
        }
         let count=0;
        if(count==1){
            button.setAttribute('disabled,true');
        }

        
})
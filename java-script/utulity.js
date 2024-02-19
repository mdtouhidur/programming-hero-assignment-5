

let countTicket = 0;
const clickBtn=document.getElementsByClassName('BusSit');
for(const btn of clickBtn){
    btn.addEventListener('click',function(event){
        
        countTicket=countTicket+1;



btn.classList.add("bg-[#10ba10c6]")
const sitNumber = event.target.innerText;


// event.setAttribute("disabled", false);
const showInput = document.getElementById('showHidden');
       showInput.classList.remove('hidden');
    //    

    // 

const selectedSitDataBox = document.getElementById('sitDataBox');
// console.log(selectedSitDataBox);
const createALiTag = document.createElement('li');

const createASampTag1 =document.createElement('samp');
createASampTag1.innerText = sitNumber;
createALiTag.appendChild(createASampTag1);

const createASampTag2 =document.createElement('samp');
createASampTag2.innerText = 'Economoy';
createALiTag.appendChild(createASampTag2);

const createASampTag3 =document.createElement('samp');
createASampTag3.innerText = 550;

createALiTag.appendChild(createASampTag3);
selectedSitDataBox.appendChild(createALiTag);

const presenttSit = document.getElementById('seatsLeft').innerText;
 const currentSitNumber = parseInt(presenttSit);
document.getElementById('seatsLeft').innerText = currentSitNumber - 1 ;
 
const totalPrice = document.getElementById("totalPrice").innerText;
const totalPriceMony = parseInt(totalPrice);
console.log(totalPriceMony);


const Couple20 = document.getElementById("totalPrice").innerText= totalPriceMony + 550;


       setNadChengInnerValue('ticket-count',countTicket);
       setNadChengInnerValue('sitPossition', sitNumber);
       




       
    })}
    






const ApplyButton1 = document.getElementById('Apply1');
ApplyButton1.addEventListener('click',function(event){
    // console.log('Touhid');

    const totalPrice = document.getElementById('totalPrice');
    let strTotalPrice = parseInt(totalPrice);


    // const grandTotal = document.getElementById('grandTotal').innerText;

    //         let ConVartgrandTotal= parseInt(grandTotal);
                


    const mainValue1 = document.getElementById('input').value = 'Couple20';
if(mainValue1 === 'Couple20'){
    let offerPrice = strTotalPrice - 20 / 100;

    document.getElementById('grandTotal').innerText=offerPrice;

}
else if(mainValue1 === 'NEW15'){
    let offerPrice2 = strTotalPrice - 15 / 100;
    document.getElementById('grandTotal').innerText=offerPrice2;
}
else{
    alert("Not A Offer");
}
     

})



function setNadChengInnerValue(id,value){
    document.getElementById(id).innerText = value;
   document.getElementById(id).innerText= value;
  

}


         
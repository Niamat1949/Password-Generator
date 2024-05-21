const get = (id) => document.getElementById(id)
let rangevalue= get("range")
let passlength= get("passlength")
let passinp= get("passinp")
let uppercase= get("uppercase")
let lowercase= get("lowercase")
let numbers= get("numbers")
let symbols= get("symbols")
let generatebtn= get("btn")
let copy= get("copyicon") 
let darklightbtn= get("darklight")  
passlength.textContent=rangevalue.value
// +" chars"
const valueof=()=>{
   passlength.textContent=rangevalue.value
   // +" chars"
}
const generate =()=>{
   passinp.value=generatepass()
}

// generate function
let symboles="~#!-@%/°^&_*$"
let majuscules="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscules="abcdefghijklmnopqrstuvwxyz"
let nombres="0123456789"
const generatepass=()=>{
   let genpass=""
   let charachters=""
   charachters+= lowercase.checked ? minuscules:"";
   charachters+= uppercase.checked ? majuscules:"";
   charachters+= numbers.checked ? nombres:"";
   charachters+= symbols.checked ? symboles:"";

   for (let i = 0; i < rangevalue.value; i++) {
       genpass += charachters.charAt(Math.floor(Math.random() * charachters.length));
   }
   return genpass
}
const Copy=()=>{
   passinp.select()
   // document.execCommand("Copy")
   navigator.clipboard.writeText(passinp.value)
   copyicon.title="copied"
   copyicon.innerText="check"
   setTimeout(function(){
   copyicon.innerText="content_copy"
   copyicon.title="copy"
   },3000)

} 
function darklight(){
   if(darklightbtn.textContent==="toggle_on"){
      document.body.style=`background: linear-gradient(to right bottom,#FFD1D1 20%,#B9D7EA,#769FCD);
      `
      let icons = document.getElementsByClassName("icon");
      for(c=0;c<icons.length;c++){
         icons[c].style.color="#000";
      }
      document.getElementById("btn").style.cssText=`
   color:#000;
   `
      document.getElementById("section").style.cssText=`border:2px solid #000;
      `
      darklightbtn.textContent="toggle_off"
   }
    else{
      document.body.style.cssText=`
      background: linear-gradient(to left top ,#52616B 20%,#03001C);
      color:#fff; 
      `
   document.getElementById("section").style=`border:2px solid #fff;
   box-shadow: 4px 4px 15px #000;
   ` 
   document.getElementById("btn").style.cssText=`
   color:#fff;
   background: linear-gradient(to right top ,#301E67,#443C68,#635985,#5B8FB9,#B6EADA);
   
   `
   let icons = document.getElementsByClassName("icon");
   for(c=0;c<icons.length;c++){
      icons[c].style.color="#fff";
   }
      darklightbtn.textContent="toggle_on"
   }
}

//  if(charachters==""||charachters.length==0){
//    return genpass
//  }



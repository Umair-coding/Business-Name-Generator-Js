
function Adjectives(adj1, adj2, adj3) {
    adj1 = "Crazy";
    adj2 = "Amazing";
    adj3 = "Fire";
    let random = Math.random();
    
   if (random <= 0.33) {
       return adj1;
   } 
   else if (random > 0.33 && random <= 0.66) {
       return adj2;
   } 
   else {
       return adj3;
   }
}


function Shop_Name(Name1, Name2, Name3) {
    Name1 = "Engine";
    Name2 = "Foods";
    Name3 = "Garments";
    let random = Math.random();
    
   if (random <= 0.33) {
       return Name1;
   } 
   else if (random > 0.33 && random <= 0.66) {
       return Name2;
   } 
   else {
       return Name3;
   }
}


function Another_Words(Word1, Word2, Word3) {
    Word1 = "Bros";
    Word2 = "Limited";
    Word3 = "Hub";
    let random = Math.random();
    
   if (random <= 0.33) {
       return Word1;
   } 
   else if (random > 0.33 && random <= 0.66) {
       return Word2;
   } 
   else {
       return Word3;
   }
}


console.log(`Card Name is ${Adjectives()} ${Shop_Name()} ${Another_Words()}`)

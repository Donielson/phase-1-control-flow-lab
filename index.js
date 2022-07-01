function scuberGreetingForFeet(ride){
  // Write your code here!
  //let ride = 600;

  if (ride <= 400) {
    return 'This one is on me!'
  }
  else if (ride < 2500 && 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    return 'No can do.'
  };
};

function ternaryCheckCity(city){
  // Write your code here!
  //const city = 'NYC'
  
  const cityMessage = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  return cityMessage;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
  case 'not as generous':
    return 'Thank you.';
  default: 
    return 'Bye.'
  }
  

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
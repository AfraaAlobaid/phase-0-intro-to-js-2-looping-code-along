// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

//wrapGifts(gifts);

function writeCards(names, event) {
  const thanks = [];
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thanks;
}
function countDown(num) {
  while (num >= 0) {
      console.log(num);
      num--;
  }
}

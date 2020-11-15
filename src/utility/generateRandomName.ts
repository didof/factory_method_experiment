const ladysList = ['Elga', 'Sansa', 'Eyra', 'Freya', 'Astrid'];
const lordList = ['Axel', 'Igor', 'Björn', 'Ingvarr', 'Hans'];

function randomBetween(min: number, max: number, random?: number) {
   if (!random) random = Math.random();
   return Math.floor(random * max - min) + min;
}

export default function generateRandomName() {
   let list = ladysList;
   let fate = Math.random();
   if (fate >= 0.5) list = lordList;
   return list[randomBetween(1, list.length, fate)];
}
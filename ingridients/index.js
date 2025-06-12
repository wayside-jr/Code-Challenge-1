const userInput = prompt (`how many number of cups would you like`);
const numberofcups = Number(userInput);

function calculateChaiIngredients(){
    
    const water = 200 * numberofcups;
    const milk = 50 * numberofcups
    const tealeaves= 1 * numberofcups;
    const sugar = 2 * numberofcups;
    
    console.log(`To make ${numberofcups} cups of kenyan chai,you will need:`);
    console.log(`water: ${water}ml`);
    console.log(`milk: ${milk}ml`);
    console.log(`tealeaves: ${tealeaves}tablespoon`);
    console.log(`sugar: ${sugar}teaspoons`);
    console.log('\nEnjoy chai bora!');
}
calculateChaiIngredients();

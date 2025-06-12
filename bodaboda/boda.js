const userinput = prompt('Unafika wapi Mkubwa?Kilometer ngapi?');
const distanceinkm = Number(userinput);
function calculateBodaFare () 
{
    const chargeperkm = 15
    const basefare = 50

    
   console.log(`uko kwote? Io ni ${distanceinkm}km`);
   console.log(`ukikailia pikipiki : KES ${basefare}`)
   console.log(`mpaka uko : KES ${distanceinkm * chargeperkm}`);
   console.log(`total: KES ${basefare + (distanceinkm * chargeperkm)}`) ;
   console.log(`\n Panda pikipiki!`);

}
calculateBodaFare () 

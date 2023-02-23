import Chance from 'chance';  // importing chance.

const chance = Chance();   // creating reference.

export const fakeUserData = ()=>{
    // console.log(chance.name({ middle: true }));
    return chance.name({ middle: true });

}

fakeUserData();
function printContactsInfolf ({names,
phones}){
const namelist = names.split(",");
const phonelist = phones.split(",");

namelist.forEach((name, i)=> {
console.log(`${name}: ${phonelist[i]}`);
});
}
printContactsInfolf({
names: "Jacob, William, Solomon, Artemis", 
phones: "34545345345,5454545454,5454545,45454545",
});
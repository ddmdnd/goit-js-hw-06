function removeItem(itemToRemove){
    const removeItemArray =[];
    if (Storage.#items.includes(itemToRemove)) {
        Storage.#items.forEach(element => {
            if(element === itemToRemove) {
                removeItemArray.push(element)
            } 
        });
    }
   console.log(removeItemArray)
}
const shoppingList = new Map([
     ['Banana', 1],
    ['Pineapple', 4],
    ['Pear', 3],
    ['Carrot', 2],
    ['Apple', 5]
  ]);
  
  const arrKey = Array.from(shoppingList.keys());
  const arrValue = Array.from(shoppingList.values());
  
  shoppingList.forEach((dataItem) =>
    console.log([arrKey[arrValue.indexOf(dataItem)], dataItem])
  );

  module.exports = { shoppingList, arrKey, arrValue };

const updateItemList = (inventory: { [key: string]: number }) => {
  const inventoryList = document.getElementById('item-list');
  inventoryList!.innerHTML = '';

  Object.entries(inventory).forEach(([itemName, quantity]) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${itemName} - Quantity: ${quantity}`;

    if (quantity < 5) {
      listItem.classList.add('almost-soldout');
    }

    inventoryList?.appendChild(listItem);
  });

  const inventoryContents = JSON.stringify(inventory);

  const p = document.createElement('p');
  p.innerHTML = `The inventory has been updated - ${inventoryContents}`;

  document.body.appendChild(p);
};

export { updateItemList };

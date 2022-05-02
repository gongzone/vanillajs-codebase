interface Idata {
  inventory: {
    [key: string]: number;
  };
}

const data: Idata = {
  inventory: {},
};

const addItem = (itemName: string, quantity: number) => {
  const currentQuantity: number = data.inventory[itemName] || 0;
  data.inventory[itemName] = currentQuantity + quantity;
};

export { data, addItem };

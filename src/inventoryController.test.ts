import { data, addItem } from '@/inventoryController';

describe('addItem', () => {
  test('adding new item to the inventory', () => {
    data.inventory = {};
    addItem('cheescake', 5);

    expect(data.inventory.cheescake).toBe(5);
  });
});

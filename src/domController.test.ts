import * as fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './templates/template.html'), 'utf-8');
document.body.innerHTML = html;

import { updateItemList } from '@/domController';

describe('updateItemList', () => {
  test('updates the Dom with the inventory items', () => {
    const inventory = {
      cheesecake: 5,
      'apple pie': 2,
      'carrot cake': 6,
    };

    updateItemList(inventory);

    const itemList = document.getElementById('item-list');
    expect(itemList?.childNodes).toHaveLength(3);

    const nodesText = Array.from(itemList!.childNodes as NodeListOf<HTMLElement>).map(
      (node) => node.innerHTML
    );
    expect(nodesText).toContain('cheesecake - Quantity: 5');
    expect(nodesText).toContain('apple pie - Quantity: 2');
    expect(nodesText).toContain('carrot cake - Quantity: 6');
  });
});

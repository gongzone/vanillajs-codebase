import * as fs from 'fs';
import path from 'path';
import { screen, getByText } from '@testing-library/dom';

const initialHtml = fs.readFileSync(path.resolve(__dirname, './templates/template.html'), 'utf-8');

beforeEach(() => {
  document.body.innerHTML = initialHtml;
});

import { updateItemList } from '@/domController';

describe('updateItemList', () => {
  test('updates the DOM with the inventory items', () => {
    const inventory = {
      cheesecake: 5,
      'apple pie': 2,
      'carrot cake': 6,
    };
    updateItemList(inventory);

    const itemList = document.getElementById('item-list')!;
    expect(getByText(itemList, 'apple pie - Quantity: 2')).toBeInTheDocument();
    expect(getByText(itemList, 'carrot cake - Quantity: 6')).toBeInTheDocument();
  });

  test('adding a paragraph indicating what was the update', () => {
    const inventory = { cheesecake: 5, 'apple pie': 2 };
    updateItemList(inventory);

    expect(
      screen.getByText(`The inventory has been updated - ${JSON.stringify(inventory)}`)
    ).toBeInTheDocument();
  });

  test('highlighting in red elements whose quntity is below five', () => {
    const inventory = {
      cheesecake: 5,
      'apple pie': 2,
      'carrot cake': 6,
    };
    updateItemList(inventory);

    expect(screen.getByText('apple pie - Quantity: 2')).toHaveStyle({ color: 'red' });
  });
});

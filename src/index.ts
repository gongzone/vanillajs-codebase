import { data, addItem } from '@/inventoryController';
import { updateItemList } from './domController';

addItem('cheesecake', 3);
addItem('apple pie', 8);
addItem('carrot cake', 7);

updateItemList(data.inventory);

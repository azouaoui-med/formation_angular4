import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'collection1',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'a2',
    name: 'collection 2',
    reference: '4567',
    state: State.ENCOURS
  },
  {
    id: 'a3',
    name: 'collection 3',
    reference: '6666',
    state: State.LIVREE
  }
];

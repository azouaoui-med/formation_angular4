import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../../shared/models/item.model';

@Injectable()
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
   }

  get collection(): Item[] {
    return this._collection;
  }
  set collection (collection: Item[]) {
    this._collection = collection;
  }

}

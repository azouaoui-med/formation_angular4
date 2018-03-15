import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../../shared/models/item.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CollectionService {
  itemCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Item>('collection');
    this._collection = this.itemCollection.valueChanges();
   }


  get collection(): Observable<Item[]>  {
    return this._collection;
  }
  set collection (collection: Observable<Item[]> ) {
    this._collection = collection;
  }
  add = (obj: Item): void => {
   // this._collection.push(obj);
   obj.id = this.afs.createId();
   this.itemCollection.doc(obj.id).set(obj)
   .catch(error => console.log(error));

  }

}


import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/service/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  sub: Subscription;
  collection$: Observable<Item[]>;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collection$ = this.collectionService.collection;
  }

}

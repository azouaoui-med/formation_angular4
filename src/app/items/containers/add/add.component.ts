import { CollectionService } from './../../../core/service/collection/collection.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit() {
  }
  addItem = (obj: Item): void => {
    this.collectionService.add(obj);
    this.router.navigate(['/items/list']);
  }

  // look for subject to store objects and use them in different componenets
}

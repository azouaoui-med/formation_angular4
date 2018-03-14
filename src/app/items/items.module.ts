import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent],
  exports: []
})
export class ItemsModule { }

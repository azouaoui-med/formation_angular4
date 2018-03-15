import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';

import { RouterModule } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule,
    RouterModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent, EditComponent],
  exports: []
})
export class ItemsModule { }

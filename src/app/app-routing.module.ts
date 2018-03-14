import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // {path: 'ajouter/:id', component: ListItemsComponent},
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule'
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules}
      // , {enableTrsacing: true}
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

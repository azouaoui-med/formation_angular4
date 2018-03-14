import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbDropdownModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, FormComponent],
  exports: [NavComponent, StateDirective, FormComponent]
})
export class SharedModule { }

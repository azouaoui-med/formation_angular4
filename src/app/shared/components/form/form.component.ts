import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  stateLibelles = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  @Input() id;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    console.log(this.id);
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference:  [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER
    });
  }
  process = (): void => {
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }
  hasError = (val: string) => {
    return (this.form.get(val).invalid && this.form.get(val).touched);
  }

}

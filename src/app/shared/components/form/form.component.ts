import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/state.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  stateLibelles = Object.values(State);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: '',
      reference: '',
      state: State.ALIVRER
    });
  }
  process = (): void => {
  }

}

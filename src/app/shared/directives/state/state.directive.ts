import { Directive, Input, OnChanges, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges, OnInit {
  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(): void {
    console.log(this.appState);
    this.nomClass = this.cssFormat(this.appState);
  }
  cssFormat = (state: string): string => {
   // console.log(state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase());
   // return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
    switch (state) {
      case 'A livrer': {
        return 'text-primary';
      }
      case 'En cours': {
        return 'text-warning';
      }
      case 'Livrée': {
        return 'badge badge-success';
      }
      default: {
        return 'text-primary';
      }
    }
  }



}


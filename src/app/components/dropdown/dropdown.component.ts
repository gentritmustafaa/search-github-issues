import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  private _model: string;

  @Output() emitModelChange: EventEmitter<any> = new EventEmitter();
  @Input() items;
  @Input() label;
  @Input() value;
  @Input() disabled;

  @Input()
  set model(model: string) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  showDropdown: any;
  searchText: any;

  constructor() {
  }

  ngOnInit() {
  }

  getValue(modeli) {
    if (this.label && this.value) {
      return this.items.find(item => item[this.value] === modeli)[this.label];
    }
    return this.items.find(item => item === modeli);
  }

  modelChanged(model) {
    this.model = this.value ? model[this.value] : model;
    this.showDropdown = false;
    this.emitModelChange.emit(this.model);
  }

  searchModelChanged() {
    if (this.searchText) {
      return this.items.filter(x => x.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
    return this.items;
  }

}

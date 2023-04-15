import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent implements OnInit {
  @Output() public setSize = new EventEmitter<FormGroup>()

  public form!: FormGroup;

  constructor (private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.form = this._fb.group({
      width: 100,
      height: 50
    })
  }

  public onSubmit() {
    this.setSize.emit(this.form)
  }

}

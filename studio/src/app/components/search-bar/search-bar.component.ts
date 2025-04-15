import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SearchInputConfig } from '../../models/dataTypes.model';

@Component({
  selector: 'app-search-bar',
  imports: [
    ButtonModule,
    FormsModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    CommonModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Input() inputsConfig: SearchInputConfig[] = [];
  @Output() search = new EventEmitter<{ [key: string]: string }>();
  formValues: { [key: string]: string } = {};

  ngOnInit() {
    this.inputsConfig.forEach((input) => {
      this.formValues[input.name] = '';
    });
  }

  triggerSearch() {
    this.search.emit(this.formValues);
  }
}

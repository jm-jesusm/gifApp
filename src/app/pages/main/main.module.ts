import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchInputComponent } from './components/search-input/search-input.component';


@NgModule({
  declarations: [
    MainComponent,
    SearchInputComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

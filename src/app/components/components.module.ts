import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';
import { ActionsComponent } from './actions-component/actions-component.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    DarkModeButtonComponent,
    SpinnerComponent,
    ButtonComponent,
    ActionsComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DarkModeButtonComponent,
    SpinnerComponent,
    ButtonComponent,
    ActionsComponent,
    FormComponent
  ]
})
export class ComponentsModule { }

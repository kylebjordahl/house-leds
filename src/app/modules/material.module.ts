import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MccColorPickerModule } from 'material-community-components'
import { MatCardModule, MatDividerModule } from '@angular/material'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MccColorPickerModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }

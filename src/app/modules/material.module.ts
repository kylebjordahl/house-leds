import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MccColorPickerModule } from 'material-community-components'
import { MatCardModule } from '@angular/material'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MccColorPickerModule,
  ],
  exports: [
    MccColorPickerModule,
    MatCardModule
  ]
})
export class MaterialModule { }

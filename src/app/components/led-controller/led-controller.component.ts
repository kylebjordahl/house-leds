import { Component, OnInit, Input } from '@angular/core'
import { OpenPixelControlService } from 'src/app/services/open-pixel-control.service'
import { MccColorPickerItem } from 'material-community-components'
import Color from 'color'

@Component({
  selector: 'app-led-controller',
  templateUrl: './led-controller.component.html',
  styleUrls: ['./led-controller.component.scss']
})
export class LedControllerComponent implements OnInit {

  @Input() pixels: PixelMask
  @Input() name: string

  constructor(
    private leds: OpenPixelControlService,
  ) { }

  ngOnInit() {
  }

  setColors(picked: string) {
    const color = new Color(picked)
    this.leds.update(
      this.pixels.map(p => p ? color : undefined)
    )
  }

}

export type PixelMask = boolean[]

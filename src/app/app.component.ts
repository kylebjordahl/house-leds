import { Component } from '@angular/core'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'house-leds'
  allPixels = Array(128).fill(true)
  everyOtherA = Array(environment.pixelCount).fill(true).map((_, idx) => !(idx % 2))
  everyOtherB = Array(environment.pixelCount).fill(true).map((_, idx) => !!(idx % 2))
}

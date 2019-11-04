import { webSocket, WebSocketSubject } from 'rxjs/webSocket'
import { Injectable } from '@angular/core'
import Color from 'color'
import { environment } from 'src/environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class OpenPixelControlService {

  leds: Color[] = Array(environment.pixelCount).fill(Color({ r: 0, g: 0, b: 0 }))
  socket: WebSocketSubject<any>
  constructor() {
    this.socket = webSocket({
      serializer: x => x,
      url: `ws://${environment.opcServer}`
    })
    this.socket.subscribe({ next: console.log, error: console.error })
  }

  update(leds: (Color | undefined)[]) {
    leds.forEach((color, idx) => {
      if (color) {
        this.leds[idx] = color
      }
    })

    this._send()
  }

  private _send() {
    // generate the opc
    const arr = Uint8Array.from(this._colorsToOpc(this.leds))
    this.socket.next(arr)
    this.socket.next(arr)
  }

  private _colorsToOpc(colors: Color[]) {
    return colors.reduce((all, color) =>
      [...all, ...(color ? [color.green(), color.red(), color.blue()] : [0, 0, 0])], [0, 0, 0, 0])
  }
}

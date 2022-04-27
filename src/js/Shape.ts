import {Canvas} from "./Canvas";
import {settings} from "./settings";
export class Shape extends Canvas {


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        super(ctx, canvas);
        this.draw()
    }

    draw() {
        super.draw();
        this.ctx.rotate(0);
        this.ctx.strokeStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width / 2 + settings.ship.shipSize/2,0.5+(this.canvas.height / 2 +1.5* settings.ship.shipSize));
        this.ctx.lineTo(this.canvas.width / 2 - settings.ship.shipSize/2,0.5+(this.canvas.height / 2 +1.5* settings.ship.shipSize));
        this.ctx.closePath();
        this.ctx.stroke();
    }
}
export class Canvas {
    protected ctx: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;

     protected constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.draw()
    }

    draw() {
        this.canvas.width = window.innerWidth / 1.5;
        this.canvas.height = window.innerHeight / 1.5;
        console.log('test')

    }
}
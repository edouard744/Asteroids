import {Shape} from "./Shape";

class Main {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvasElement: HTMLCanvasElement;
    private shape: Shape;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.shape= new Shape(this.ctx,this.canvasElement);
    }
}

new Main();
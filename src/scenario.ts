import Matter from 'matter-js'

export class Scenario {
    Engine!: typeof Matter.Engine;
    Render!: typeof Matter.Render;
    Runner!: typeof Matter.Runner;
    Bodies!: typeof Matter.Bodies;
    Composite!: typeof Matter.Composite;

    constructor(canvas: HTMLCanvasElement) {

        // module aliases
        this.Engine = Matter.Engine;

        this.Render = Matter.Render;
        this.Runner = Matter.Runner;
        this.Bodies = Matter.Bodies;
        this.Composite = Matter.Composite;

        // create an engine
        var engine = this.Engine.create();

        // create a renderer
        var render = this.Render.create({
            element: document.body,
            engine: engine,
            canvas: canvas
        });

        // create two boxes and a ground
        var boxA = this.Bodies.rectangle(400, 200, 80, 80);
        var boxB = this.Bodies.rectangle(450, 50, 80, 80);
        const trapezoid = this.Bodies.trapezoid(10, 10, 20, 30, 10, { angle: 90, })
        var ground = this.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        this.Composite.add(engine.world, [boxA, boxB, ground, trapezoid]);


        // run the renderer
        this.Render.run(render);

        // create runner
        var runner = this.Runner.create();

        // run the engine
        this.Runner.run(runner, engine);
    }
}
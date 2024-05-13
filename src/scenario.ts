import Matter from 'matter-js'


interface ScenarioOption {
    canvas: HTMLCanvasElement,
    populationSize: number,
    sprite: string
}
export class Scenario {
    private Engine!: typeof Matter.Engine;
    private Render!: typeof Matter.Render;
    private Runner!: typeof Matter.Runner;
    private Bodies!: typeof Matter.Bodies;
    private Composite!: typeof Matter.Composite;
    private engine!: Matter.Engine;
    constructor(scenarioOption: ScenarioOption) {

        // module aliases
        this.Engine = Matter.Engine;

        this.Render = Matter.Render;
        this.Runner = Matter.Runner;
        this.Bodies = Matter.Bodies;
        this.Composite = Matter.Composite;

        // create an engine
        this.engine = this.Engine.create();

        // create a renderer
        var render = this.Render.create({
            element: document.body,
            engine: this.engine,
            canvas: scenarioOption.canvas
        });

        // create two boxes and a ground
        var boxA = this.Bodies.rectangle(400, 200, 80, 80);
        var boxB = this.Bodies.rectangle(450, 50, 80, 80);
        const trapezoid = this.Bodies.trapezoid(10, 10, 20, 30, 10, { angle: 90, })
        var ground = this.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        this.Composite.add(this.engine.world, [boxA, boxB, ground, trapezoid]);


        // run the renderer
        this.Render.run(render);

        // create runner
        var runner = this.Runner.create();

        // run the engine
        this.Runner.run(runner, this.engine);

    }

    beforeUpdate(callback: Function) {
        Matter.Events.on(this.engine, 'beforeUpdate', (cb: any) => {
            callback(cb)
        });
    }

    afterUpdate(callback: Function) {
        Matter.Events.on(this.engine, 'afterUpdate', (cb: any) => {
            callback(cb)
        });
    }

}
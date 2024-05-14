import Matter from 'matter-js'

interface ScenarioOption {
    canvas: HTMLCanvasElement,
    populationSize?: number,
    sprite?: string
}

export class Scenario {
    private Engine!: typeof Matter.Engine;
    Render!: typeof Matter.Render;
    Runner!: typeof Matter.Runner;
    Bodies!: typeof Matter.Bodies;
    Composite!: typeof Matter.Composite;
    engine!: Matter.Engine;
    render!: Matter.Render
    constructor(scenarioOption?: ScenarioOption) {

        // module aliases
        this.Engine = Matter.Engine;

        this.Render = Matter.Render;
        this.Runner = Matter.Runner;
        this.Bodies = Matter.Bodies;
        this.Composite = Matter.Composite;

        // create an engine
        this.engine = this.Engine.create();

        // create a renderer
        this.render = this.Render.create({
            engine: this.engine,
            canvas: scenarioOption?.canvas,
            options: {
                showDebug: true,
                wireframes: false
            }
        });
        this.Runner.run(this.engine);
        this.Render.run(this.render);
    }

    addGound() {
        const groundHeight = 10;
        const ground = this.Bodies.rectangle(window.innerWidth / 2, window.innerHeight - groundHeight, window.innerWidth, groundHeight, { isStatic: true, render: { fillStyle: 'red' } });
        this.Composite.add(this.engine.world, [ground]);
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
import Matter from "matter-js";
import { Scenario } from "./scenario";

export default class Individual {

    body!: Matter.Body
    constructor(private scenario: Scenario, sprite: string, x: number, y: number, width: number, height: number) {
        this.addIndividual(sprite, x, y, width, height)
    }

    private addIndividual(sprite: string, x: number, y: number, width: number, height: number) {
        this.body = this.scenario.Bodies.rectangle(x, y, width, height, {
            render: {
                sprite: {
                    texture: sprite,
                    xScale: 0.05,
                    yScale: 0.05
                },
            }
        });
        this.scenario.Composite.add(this.scenario.engine.world, [this.body]);
    }
}
import { Scenario } from './scenario';
import p5, * as p from 'p5';
import Individual from './individual';

window.addEventListener('resize', () => init());

window.addEventListener("DOMContentLoaded", () => init());


const init = () => {
    new p5((p: p5) => {
        const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
        const scenario = new Scenario({ canvas: canvas });
        const individual = new Individual(scenario, './img/starship.png', 40, 10, 10, 40);

        p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight, canvas);
            scenario.addGound();
            // scenario.afterUpdate(() => {
            //     console.log(individual.body.angle)
            // })
        }
    })
}
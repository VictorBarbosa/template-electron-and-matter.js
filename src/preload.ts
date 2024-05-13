import { Scenario } from './scenario';


window.addEventListener("DOMContentLoaded", () => {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const scenario = new Scenario(canvas);

    scenario.afterUpdate((c: any) => {
        console.log("afterUpdate*****");

    });

    scenario.beforeUpdate((c: any) => {
        console.log("beforeUpdate****");
    });
});

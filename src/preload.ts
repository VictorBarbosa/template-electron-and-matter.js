import { Scenario } from './scenario';


window.addEventListener("DOMContentLoaded", () => {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const s = new Scenario(canvas)
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const type of ["chrome", "node", "electron"]) {
        const value = (process.versions[type] || '');
        replaceText(`${type}-version`, value);
    }

});

import { Mock_Data } from "../mock/data";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(Mock_Data);
        }, 100);
    });
}
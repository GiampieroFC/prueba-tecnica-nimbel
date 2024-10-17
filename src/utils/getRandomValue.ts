import { getRandomInt } from "./getRandomInt";

export const getRandomValue = (obj: Object) => Object.values(obj)[getRandomInt(Object.values(obj).length)]; 
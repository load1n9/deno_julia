import { f32, i32, julia } from "../mod.ts";

const sqrt = julia.getFunction("sqrt");

const value = sqrt(f32(4.0));

console.log(f32(value));

const binomial = julia.getFunction("binomial");

const value2 = binomial(i32(5), i32(3));

console.log(i32(value2));

julia.run("this_function_does_not_exist()");
console.error(julia.exception);

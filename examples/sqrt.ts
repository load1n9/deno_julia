import { f32, julia } from "../mod.ts";

const sqrt = julia.getFunction("sqrt");

const value = f32(
  sqrt(f32(4.0)),
);

console.log(value);
julia.run("this_function_does_not_exist()");
console.error(julia.exception);

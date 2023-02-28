import { f32, julia } from "./mod.ts";

const sqrt = julia.getFunction("sqrt");

console.log(
  f32(
    julia.call(sqrt, f32(4.0)),
  ),
);

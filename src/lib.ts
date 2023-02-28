import { SYMBOLS } from "./symbols.ts";
export const lib =
  Deno.dlopen(
    `libjulia.${
      Deno.build.os === "darwin"
        ? "dylib"
        : Deno.build.os === "windows"
        ? "dll"
        : "so"
    }`,
    SYMBOLS,
  ).symbols;

# Deno Julia

[![Tags](https://img.shields.io/github/release/load1n9/deno_julia)](https://github.com/load1n9/deno_julia/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/julia/mod.ts)
[![License](https://img.shields.io/github/license/load1n9/deno_julia)](https://github.com/load1n9/deno_julia/blob/main/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/load1n9)

Deno bindings for the [julia](https://julialang.org/) programming language

## Usage

```ts
import { f32, julia } from "https://deno.land/x/julia/mod.ts";

const sqrt = julia.getFunction("sqrt");

console.log(
  f32(
    julia.call(sqrt, f32(4.0)),
  ),
);

julia.close();
```

## Maintainers

- Dean Srebnik ([@load1n9](https://github.com/load1n9))

## License

[Apache-2.0](./LICENSE) licensed.

Copyright 2023 © Dean Srebnik

export const SYMBOLS = {
  jl_init: {
    parameters: [],
    result: "void",
  },
  jl_eval_string: {
    parameters: ["buffer"],
    result: "pointer",
  },
  jl_call: {
    parameters: ["pointer"],
    result: "pointer",
  },
  jl_call1: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  jl_call2: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  jl_base_module: {
    name: "jl_base_module",
    type: "pointer",
  },
  jl_call3: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
} as const;

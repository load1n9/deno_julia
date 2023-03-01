export const SYMBOLS = {
  jl_init: {
    parameters: [],
    result: "void",
  },
  jl_eval_string: {
    parameters: ["buffer"],
    result: "pointer",
  },
  jl_atexit_hook: {
    parameters: ["i32"],
    result: "void",
  },
  jl_unbox_float64: {
    parameters: ["pointer"],
    result: "f64",
  },
  jl_symbol: {
    parameters: ["buffer"],
    result: "pointer",
  },
  jl_set_global: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  jl_typeof_str: {
    parameters: ["pointer"],
    result: "buffer",
  },
  jl_exception_occurred: {
    parameters: [],
    result: "pointer",
  },
  jl_unbox_float32: {
    parameters: ["pointer"],
    result: "f32",
  },
  jl_unbox_int64: {
    parameters: ["pointer"],
    result: "i64",
  },
  jl_unbox_int32: {
    parameters: ["pointer"],
    result: "i32",
  },
  jl_unbox_int16: {
    parameters: ["pointer"],
    result: "i16",
  },
  jl_unbox_int8: {
    parameters: ["pointer"],
    result: "i16",
  },
  jl_unbox_uint64: {
    parameters: ["pointer"],
    result: "u64",
  },
  jl_unbox_uint32: {
    parameters: ["pointer"],
    result: "u32",
  },
  jl_unbox_uint16: {
    parameters: ["pointer"],
    result: "u16",
  },
  jl_unbox_uint8: {
    parameters: ["pointer"],
    result: "u16",
  },
  jl_unbox_bool: {
    parameters: ["pointer"],
    result: "bool",
  },
  jl_box_float64: {
    parameters: ["f64"],
    result: "pointer",
  },
  jl_box_float32: {
    parameters: ["f32"],
    result: "pointer",
  },
  jl_box_int64: {
    parameters: ["i64"],
    result: "pointer",
  },
  jl_box_int32: {
    parameters: ["i32"],
    result: "pointer",
  },
  jl_box_int16: {
    parameters: ["i16"],
    result: "pointer",
  },
  jl_box_int8: {
    parameters: ["i8"],
    result: "pointer",
  },
  jl_box_uint64: {
    parameters: ["u64"],
    result: "pointer",
  },
  jl_box_uint32: {
    parameters: ["u32"],
    result: "pointer",
  },
  jl_box_uint16: {
    parameters: ["u16"],
    result: "pointer",
  },
  jl_box_uint8: {
    parameters: ["u8"],
    result: "pointer",
  },
  jl_box_bool: {
    parameters: ["bool"],
    result: "pointer",
  },
  jl_box_char: {
    parameters: ["i8"],
    result: "pointer",
  },
  jl_call: {
    parameters: ["pointer", "buffer", "i32"],
    result: "pointer",
  },
  jl_call0: {
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
  jl_call3: {
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },

  jl_base_module: {
    name: "jl_base_module",
    type: "pointer",
  },

  jl_main_module: {
    name: "jl_base_module",
    type: "pointer",
  },
} as const;

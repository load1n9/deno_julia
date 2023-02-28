import { cstr } from "../utils.ts";
import { lib } from "./lib.ts";

class Julia {
  #basemodule = lib.jl_base_module;
  constructor() {
    lib.jl_init();
  }

  run(code: string, file = false) {
    return lib.jl_eval_string(
      cstr(file ? Deno.readTextFileSync(code) : code),
    );
  }

  call(...args: Deno.PointerValue[]) {
    switch (args.length) {
      case 0:
        throw new Error("No function passed to call");
      case 1:
        return lib.jl_call(args[0]);
      case 2:
        return lib.jl_call1(args[0], args[1]);
      case 3:
        return lib.jl_call2(args[0], args[1], args[2]);
      default:
        throw new Error("Too many arguments passed to call");
    }
  }

  getFunction(name: string) {
    return lib.jl_eval_string(cstr(name));
  }

  close(code = 0) {
    lib.jl_atexit_hook(code);
  }
}

export function f64<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_float64(ptrOrValue)!
    : lib.jl_unbox_float64(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function f32<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_float32(ptrOrValue)!
    : lib.jl_unbox_float32(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function i8<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_int8(ptrOrValue)!
    : lib.jl_unbox_int8(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function i16<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_int16(ptrOrValue)!
    : lib.jl_unbox_int16(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function i32<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_int32(ptrOrValue)!
    : lib.jl_unbox_int32(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function i64<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_int64(ptrOrValue)!
    : lib.jl_unbox_int64(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function u8<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_uint8(ptrOrValue)!
    : lib.jl_unbox_uint8(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function u16<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_uint16(ptrOrValue)!
    : lib.jl_unbox_uint16(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function u32<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_uint32(ptrOrValue)!
    : lib.jl_unbox_uint32(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function u64<T extends Deno.PointerValue | number>(
  ptrOrValue: T,
): T extends number ? Deno.PointerValue
  : number {
  return (typeof ptrOrValue == "number"
    ? lib.jl_box_uint64(ptrOrValue)!
    : lib.jl_unbox_uint64(ptrOrValue)!) as T extends number ? Deno.PointerValue
      : number;
}

export function bool<T extends Deno.PointerValue | boolean>(
  ptrOrValue: T,
): T extends boolean ? Deno.PointerValue
  : boolean {
  return (typeof ptrOrValue == "boolean"
    ? lib.jl_box_bool(ptrOrValue)!
    : lib.jl_unbox_bool(ptrOrValue)!) as T extends boolean ? Deno.PointerValue
      : boolean;
}

export const julia = new Julia();

import { cstr } from "../utils.ts";
import { lib } from "./lib.ts";

class Julia {
  #basemodule = lib.jl_base_module;
  constructor() {
    lib.jl_init();
    console.log(this.#basemodule);
  }

  run(code: string, file = false) {
    return lib.jl_eval_string(
      cstr(file ? Deno.readTextFileSync("code") : code),
    );
  }
  call(fun: Deno.PointerValue) {
    return lib.jl_call(fun);
  }
}

export const julia = new Julia();

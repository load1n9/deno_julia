const textEncoder = new TextEncoder();
// deno-lint-ignore no-unused-vars
const textDecoder = new TextDecoder();

export function cstr(str: string): Uint8Array {
    const buf = new Uint8Array(str.length + 1);
    textEncoder.encodeInto(str, buf);
    return buf;
  }
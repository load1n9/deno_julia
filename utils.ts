const textEncoder = new TextEncoder();

export function cstr(str: string): Uint8Array {
  const buf = new Uint8Array(str.length + 1);
  textEncoder.encodeInto(str, buf);
  return buf;
}

let id = 0;
export function getId() {
  id += 1;
  return id;
}

export const NO_OP = () => {};

export const either = (a, b, c) => (c ? a : b);

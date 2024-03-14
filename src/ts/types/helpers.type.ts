export type Icons<T extends string> = { name: string; icon: T; gender: string };
export type Callback = () => void;
export type UnaryCallback<T> = (arg: T) => void;

class Observer<K, Types extends string> {
  fns: { [Type in Types]?: ((args: K) => void)[] } = {};

  call<Type extends Types>(type: Type, args: K) {
    const callbacks = this.fns[type];
    if (callbacks) {
      callbacks.forEach((callback) => callback(args));
    }
  }
  addEventListener<Type extends Types>(type: Type, fn: (args: K) => void) {
    if (!this.fns[type]) {
      this.fns[type] = [];
    }
    this.fns[type]?.push(fn);
  }
}
export default Observer;

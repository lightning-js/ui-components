export const chainFunctions = (callback: Function | any, originalFunc: Function) => {
  return (...args: any[]) => {
    typeof callback === 'function' && callback.apply(this, args);
    originalFunc.apply(this, args);
  };
};

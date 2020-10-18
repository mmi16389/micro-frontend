
const loadModule = (scope: any, module: any) => {
  return window[scope].get(module).then((factory: any) => {
    const Module = factory()
    return Module
  })
}
export default loadModule

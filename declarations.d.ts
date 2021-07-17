declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }

  const classNames: ClassNames

  export = classNames
}

declare module 'assets/*.svg' {
  const path: string

  export default path
}

declare module "*.pdf" {
  export default "" as string;
}

declare module "*.json" {
  export default "" as object;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

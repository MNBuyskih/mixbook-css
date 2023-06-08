import * as React from "react";
import "./col.scss"

type TColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface IProps {
  children?: React.ReactNode;
  size?: TColSize;
}

export function Col(props: IProps): JSX.Element {
  const {children, size = ""} = props;

  let className = "col";
  if (size) className = `col-${size}`

  return <div className={className}>{children}</div>;
}

import * as React from "react";
import "./example.scss"
import classNames from "classnames"

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export function Example(props: IProps): JSX.Element {
  const {children, className} = props;

  return <div className={classNames("example", className)}>{children}</div>;
}

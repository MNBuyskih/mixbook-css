import * as React from "react";
import "./container.scss"


interface IProps {
  children?: React.ReactNode
}

export function Container(props: IProps): JSX.Element {
  const {children} = props;
  return <div className={"container"}>{children}</div>;
}

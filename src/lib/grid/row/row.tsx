import * as React from "react";
import "./row.scss"

interface IProps {
  children?: React.ReactNode
}

export function Row(props: IProps): JSX.Element {
  const {children} = props;

  return <div className={"row"}>{children}</div>;
}

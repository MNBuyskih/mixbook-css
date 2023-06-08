import * as React from "react";
import "./col.scss"

interface IProps {
  children?: React.ReactNode;
}

export function Col(props: IProps): JSX.Element {
  const {children} = props;

  return <div className={'col'}>{children}</div>;
}

import * as React from "react";
import "./row.scss"
import {IGenericProps} from "../../../utils/genericProps";
import {classNames} from "../../../utils/classNames";

interface IProps extends IGenericProps {
}

export function Row(props: IProps): JSX.Element {
  const {children} = props;

  return <div className={classNames("row",props )}>{children}</div>;
}

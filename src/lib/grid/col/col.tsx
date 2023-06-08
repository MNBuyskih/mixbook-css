import * as React from "react";
import "./col.scss"
import {classNames} from "../../../utils/classNames";
import {IGenericProps} from "../../../utils/genericProps";

type TColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface IProps extends IGenericProps {
  size?: TColSize;
}

export function Col(props: IProps): JSX.Element {
  const {children, size = ""} = props;
  const className = classNames("col", size && `col-${size}`, props);

  return <div className={className}>{children}</div>;
}

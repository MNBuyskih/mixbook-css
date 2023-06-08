import * as React from "react";
import "./container.scss"
import {IGenericProps} from "../../../utils/genericProps";
import {classNames} from "../../../utils/classNames";

interface IProps extends IGenericProps {
}

export function Container(props: IProps): JSX.Element {
  const {children} = props;

  return <div className={classNames('container', props)}>{children}</div>;
}

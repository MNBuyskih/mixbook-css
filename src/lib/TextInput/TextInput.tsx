import * as React from "react";
import "./TextInput.css";
import {ChangeEvent} from "react";

interface IProps extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
    label?: string;
    onChange?: (value: string) => void;
}

export function TextInput(props: IProps): React.JSX.Element {
    const {label, type = "text", onChange, id="id", ...inputProps} = props;
    const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value), [onChange]);

    return <div className={'simple-form-group'}>
        {label && <label className="simple-text-label" htmlFor={"id"}>{label}</label>}
        <input
            id={id}
            type={type}
            className="simple-text-input"
            onChange={handleChange}
            {...inputProps}
        />
    </div>;
}

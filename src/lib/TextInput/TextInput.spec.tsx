import React from 'react';
import {render, screen} from '@testing-library/react';
import {TextInput} from "./TextInput";
import '@testing-library/jest-dom'


test('renders learn react link', () => {
    render(<TextInput placeholder={"name@example.com"} type={"email"} label={"Email"}/>);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("name@example.com")).toBeInTheDocument();
});

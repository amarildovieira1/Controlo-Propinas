import { ComponentProps } from "react";

export interface IInputProps extends ComponentProps<"input"> {
    label?: string;
    error?: string;
    type: "text" | "password" | "file" | "email" | "tel",
    control: any,
    name: string
} 
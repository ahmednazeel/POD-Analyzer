export interface InputProps {
    type?: string;
    name: string;
    label: string;
    placeholder?: string;
    marginTop?:boolean;
    value?: string;
    inputFocusColor?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BtnProp {
    text:string;
    btnClasses:string;
}
export interface NavigatorBtnProps {
    hoverColor?:string;
    to?:string;
}
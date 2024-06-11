import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
    return <button className="btn bg-purple-400 rounded-lg text-white text-xl" {...props} >{children}</button>
}
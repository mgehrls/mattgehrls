import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { IconType } from "react-icons/lib"

export type ContactType = {
    href: string,
    text: string,
    icon: IconType
}

export const contactConfig = [
    { href: "mailto:matt.gehrls@gmail.com", text: "mattgehrls@gmail.com", icon: AiOutlineMail},
    { href: "tel:16165002366", text: "1-616-500-2366", icon: AiOutlinePhone },
    { href: "https://www.linkedin.com/in/mattgehrls", text: "in/mattgehrls", icon: AiOutlineLinkedin},
    { href: "https://github.com/mgehrls", text: "mgehrls", icon: AiOutlineGithub },
]
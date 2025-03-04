import { Github, Linkedin, Mail } from "lucide-react";

export type SocialsTypes = "github" | "linkedin";
export default {
    socials: {
        github: {
            url: 'https://github.com/rafa-carmo',
            icon: <Github />
        },
        linkedin: {
            url: 'https://www.linkedin.com/in/rafael-do-carmo-web-developer/',
            icon: <Linkedin />,
        },
        email: {
            url: 'mailto:rafaelcarmo143@gmail.com',
            icon: <Mail />,
        }
    },
    contact: {
        email: 'rafaelcarmo143@gmail.com',
        phone: '+55 21 9 9554-0043',
        location: 'Rio de Janeiro, Brasil',
    }
}
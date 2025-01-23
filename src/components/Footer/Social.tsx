import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/harrynortham" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/harrynorthamcom/" },
    { name: "X", icon: FaXTwitter, url: "https://x.com/harrynortham" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@harrynortham" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/@harrynorthamcom" },
    { name: "GitHub", icon: FaGithub, url: "https://www.github.com/harrynortham" },
]

export default function Social() {
    return (
        <div className="flex flex-wrap space-x-2">
            {socialLinks.map((social) => (
                <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener"
                    className="group"
                    aria-label={`Visit our ${social.name} page`}
                >
                    <div className="bg-primary  shadow hover:bg-primary/80 rounded-full p-3 ">
                        <social.icon className="w-4 h-4  text-white" />
                    </div>
                </Link>
            ))}
        </div>
    )
}


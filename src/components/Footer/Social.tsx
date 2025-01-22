import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/harrynortham" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/harrynorthamcom/" },
    { name: "X", icon: FaXTwitter, url: "https://x.com/harrynortham" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@harrynortham" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/@harrynorthamcom" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/harrynortham" },
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
                    <div className="bg-black rounded-full p-3 ">
                        <social.icon className="w-4 h-4  text-white" />
                    </div>
                </Link>
            ))}
        </div>
    )
}


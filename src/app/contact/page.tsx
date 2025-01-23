import { poetsenone } from '@/components/ui/fonts';
import type { Metadata } from "next";
import { ContactForm } from './Form';

export const metadata: Metadata = {
    title: "Contact",
    description: "Drop me a message to say hello, or get in contact with any enquiries, or collaboration requests. I'm always excited to connect with new people and help.",
};

export default function Contact() {
    return (
        <div className="mx-auto max-w-7xl px-4 flex-1 flex flex-col justify-center">
            <div className="intro-text py-8 max-w-2xl">
                <h1 className={`${poetsenone.className} text-4xl text-center mb-4`}>Contact</h1>
                <p className=" text-center mb-4">Hey! I&apos;m always excited to connect with new people and hear about interesting projects. <b className="font-bold">Drop me a message</b> below or reach out through any of my social media channels.</p>
                <p className="text-center">Whether you want to collaborate, chat about web stuff, or just say hi - I&apos;d love to hear from you!</p>
                <div className="mt-8"><ContactForm /></div>
            </div>
        </div>
    )
}
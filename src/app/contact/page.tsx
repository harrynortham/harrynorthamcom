import { poetsenone } from '@/components/ui/fonts';

export default function Contact() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div className="intro-text py-8 max-w-2xl">
                <h1 className={`${poetsenone.className} text-4xl  mb-4`}>Contact</h1>
                <p className=" mb-4">Hey! I&apos;m always excited to connect with new people and hear about interesting projects. <b className="font-bold">Drop me a message</b> below or reach out through any of my social media channels.</p><p>Whether you want to collaborate, chat about web stuff, or just say hi - I&apos;d love to hear from you!</p>
            </div>
        </div>
    )
}
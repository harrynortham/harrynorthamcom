import Link from "next/link";
import { Button } from "@/components/ui/button"
import { FaLinkedinIn } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { poetsenone } from '@/components/ui/fonts';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">

      <div className="avatar flex justify-center">
        <Avatar className="w-24 h-24 md:w-32 md:h-32">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
      </div>

      <div className="intro-text py-8 max-w-2xl">
        <div className={`${poetsenone.className} intro font-extrabold text-4xl`}><h1>Hello, I&apos;m Harry 👋</h1></div>
        <div className="description mt-4 text-pretty">A web developer in Gibraltar with high level experience in Front-End within the iGaming industry. Producing quality work, crafting digital journeys that captivate users.  </div>
        <div className="role mt-4 text-balance">Currently working at <Link target="_blank" rel="noopener" className="underline" href="https://digibeat.com/">Digibeat</Link> as Senior Web Operations Manager</div>

        <Link rel="noopener" target="_blank" href="https://www.linkedin.com/in/harrynortham"><Button size="lg" className="mt-6 text-base">LinkedIn <FaLinkedinIn /></Button></Link>
      </div>


    </div>
  );
}

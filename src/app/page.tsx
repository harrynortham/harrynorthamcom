import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { poetsenone } from '@/components/ui/fonts';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">

      <div className="avatar flex justify-center">
        <Avatar className="w-24 h-24 md:w-32 md:h-32">
          <AvatarImage src="/avatar.webp" alt="Harry Northam" />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
      </div>

      <div className="intro-text py-8 max-w-2xl">
        <h1 className={`${poetsenone.className} intro text-4xl mb-4`}>Hello, I&apos;m Harry 👋</h1>
        <div className="description  text-pretty mb-4">A web developer in Gibraltar with high level experience in Front-End within the iGaming industry. Producing quality work,  <span className="highlight bg-yellow-100 px-0.5">crafting digital journeys</span> that captivate users.  </div>
        <div className="role text-balance mb-6">Currently working at <Link target="_blank" rel="noopener" className="underline" href="https://digibeat.com/">DigitalBeat</Link> as Senior Web Operations Manager.</div>

        <Link href="/blog"><Button size="lg" className=" text-base">Read blog</Button></Link>
      </div>


    </div>
  );
}

import { poetsenone } from '@/components/ui/fonts';
import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div className="intro-text py-8 max-w-2xl">
                <div className={`${poetsenone.className} text-7xl mb-4 `}>404</div>
                <h1 className={`${poetsenone.className} text-4xl mb-4`}>Not found</h1>
                <p> <Link href="/">Return home</Link></p>

            </div>
        </div>
    )
}
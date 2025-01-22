import { poetsenone } from '@/components/ui/fonts';

export default function About() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className={`${poetsenone.className} text-4xl`}>About</h1>
            </div>
        </div>
    )
}
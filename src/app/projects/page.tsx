import { poetsenone } from '@/components/ui/fonts';

export default function Projects() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className={`${poetsenone.className} text-4xl mb-4`}>Projects</h1>
                <p className='mb-4'>Check out my current projects below, where I&apos;m working on innovative solutions in the online media space.</p>
            </div>
        </div>
    )
}
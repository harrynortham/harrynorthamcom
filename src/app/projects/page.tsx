
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Media maverick unleashing jaw-dropping digital projects that redefine online creativity—peek inside my innovation workshop and get ready for innovation! ",
};

export default function Projects() {
    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div>
                <h1 className="font-poetsen text-4xl mb-4">Projects</h1>
                <p className='mb-4'>Check out my current projects below, where I&apos;m working on innovative solutions in the online media space.</p>
            </div>
        </div>
    )
}
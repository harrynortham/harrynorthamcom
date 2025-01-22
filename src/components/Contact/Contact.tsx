import Social from "../Footer/Social"

export default function Contact() {
    return (
        <div className="contact bg-neutral-200">
            <div className="mx-auto max-w-7xl py-8 px-4">

                <div className="space-y-6 md:space-y-0 md:flex md:justify-between">
                    <div>
                        <h2 className="mb-4 font-bold text-xl">Social</h2>
                        <div><Social /></div>
                    </div>
                    <div>
                        <h2 className="mb-4 font-bold text-xl">Contact</h2>
                        <div>[Form]</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
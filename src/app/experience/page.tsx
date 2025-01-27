import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Pioneering 12-year web odyssey: Transforming digital landscapes with innovative products that connect millions worldwide, revealing the technical expertise behind global-scale solutions.",
};

export default function Experience() {


    const timelineData = [
        {
            date: "2020",
            title: "Foundation",
            description: "Omobike was founded with a vision to revolutionize urban mobility in Africa"
        },
        {
            date: "2021",
            title: "Launch in Lagos",
            description: "Successfully launched our first fleet of electric bikes in Lagos, Nigeria"
        },
        {
            date: "2022",
            title: "Expansion",
            description: "Expanded operations to multiple cities and launched our mobile app"
        },

    ];

    return (
        <div className="mx-auto max-w-7xl px-4 text-center flex-1 flex flex-col justify-center">
            <div className="intro-text py-8 max-w-2xl">
                <h1 className="font-poetsen text-4xl mb-4">Experience</h1>
                <p className="mb-8">With over 12 years of experience in the web industry, I&apos;ve worked on products that are used by millions globally. Below you&apos;ll find the key roles that have shaped my technical expertise.</p>

                <div className="timeline mb-8 relative py-4">
                    {/* Vertical Line */}
                    <div className="absolute left-[1px] top-0 bottom-0 w-1 bg-green-200 " />

                    <div className="relative space-y-8">
                        {timelineData.map((item, index) => (
                            <div key={index}>

                                {/* Dot */}
                                <div className="relative">
                                    <div className="absolute left-[-4px] w-4 h-4 bg-green-500 rounded-full mt-2" />
                                </div>
                                {/* Content */}
                                <div className="ml-4 md:ml-6 pt-1">
                                    <div className="flex">
                                        <div className="pl-1 font-poetsen">{item.date}  </div>

                                        <div className="flex-1 pl-3 md:pl-6 text-left">{item.title}  {item.description}</div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}
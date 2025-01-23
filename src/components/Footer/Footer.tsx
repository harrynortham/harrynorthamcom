import Social from "./Social"
import Link from "next/link"
export default function Footer() {
    return (
        <div className="footer mt-auto">
            <div className="mx-auto max-w-7xl py-6 px-4">
                <div className="text-center my-4"><div className="inline-block mx-auto"><Social /></div></div>
                <div className="copyright text-center ">Copyright &copy; 2025 Harry Northam. All right reserved. <Link href="https://x.com/buildinpublic" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-700">#buildinpublic</Link></div>
            </div>
        </div>
    )
}
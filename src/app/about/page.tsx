import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Harry Northam, a passionate web developer based in Gibraltar, delivers cutting-edge digital solutions with expert coding skills, driving user engagement.",
};

export default function About() {
    return (
        <div className="mx-auto max-w-4xl px-4 flex-1 flex flex-col justify-center  [&>p]:mb-8 [&>h2]:font-poetsen [&>h3]:font-poetsen [&>h4]:font-poetsen [&>h2]:mb-8 [&>h2]:text-2xl [&>h3]:text-xl [&>h4]:text-lg">
            <h1 className="font-poetsen text-4xl mb-4 text-center">About</h1>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac felis at ligula aliquam pulvinar a non urna. Nam dictum finibus ex vitae sollicitudin. Integer facilisis nulla orci, ut vestibulum lectus ultricies ut. Suspendisse rutrum nunc non augue vulputate imperdiet. Donec vestibulum, purus et dictum commodo, tellus neque fringilla purus, at pellentesque purus ligula nec lectus. Etiam auctor odio et dapibus pellentesque. Donec laoreet felis lectus.</p>

            <h2>Heading 2</h2>

            <p >Curabitur urna tortor, tincidunt vel pretium eu, ornare eu quam. Vivamus eleifend iaculis feugiat. Vestibulum pharetra viverra consequat. Vivamus mattis augue non iaculis consectetur. Morbi suscipit iaculis erat ac aliquam. Nam tincidunt mattis leo, nec fringilla nibh molestie ut. Mauris in risus varius turpis volutpat accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta dignissim hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mi metus, sagittis quis sollicitudin et, venenatis nec nibh.</p>

            <p>Nulla a dolor non lorem ultricies elementum. Fusce hendrerit, orci at posuere imperdiet, velit risus efficitur massa, vel euismod leo dui vel orci. Suspendisse potenti. Sed eget ullamcorper tellus. Fusce iaculis nec massa vitae sodales. Proin arcu purus, tristique in ornare et, dapibus et diam. In nec placerat lorem. Donec non placerat tortor, sit amet iaculis leo. Fusce molestie luctus tellus id tempus. Integer auctor commodo molestie. Vivamus non congue mi. Phasellus fermentum, neque eu semper tincidunt, velit odio consequat arcu, eget bibendum velit ligula vitae dui. Vestibulum nec posuere turpis. Morbi bibendum metus bibendum vehicula luctus. Aenean efficitur, diam ut pellentesque vulputate, dui neque lacinia nisl, vitae semper ligula erat quis velit. Vestibulum et justo vel velit consequat iaculis vitae lobortis dolor.</p>

        </div>
    )
}
type NavItemProps = {
    title: string
    url: string
}
function NavItem(props: NavItemProps) {
    const { title, url } = props
    return (
        <li>
            <a className="block px-3 py-2 transition hover:text-teal-500"
                href={url}>{title}</a>
        </li>
    )
}
function Navbar() {
    return (
        <div className="flex justify-center mx-auto max-w-auto h-16 pt-6 bg-[rgb(36,36,36)]">
            <nav>
                <ul className="flex rounded-full bg-grey px-3 text-sm font-medium text-white 
   backdrop-blur">
                    <NavItem title={"About Me"} url={"/"} />
                    <NavItem title={"Projects"} url={"/projects"} />
                    <NavItem title={"Contact"} url={"/contact"} />
                </ul>
            </nav>
        </div>
    )
}

function Footer() {
    return (
        <footer className="bg-[rgb(36,36,36)] pt-10 px-8 pb-16 border-t justify-center ">
         
            <p className="text-sm text-zinc-400 text-center ">@Claudiu</p>
        </footer>

    )
}
export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />

            <main>{children}</main>
            <Footer />
        </>
    )
}

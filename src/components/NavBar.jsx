import Link from "next/link"

function NavBar() {
    return (
        <nav className="bg-slate-900" >
            <div className="container mx-auto flex justify-between items-center p-3 " >
                <Link href={'/'} >
                    <h3>TASKS.DB</h3>
                </Link>
                <ul className="flex gap-4 text-lg" >
                    <li>
                        <Link href='new' >
                            <div>
                                <p className="border border-white-50 px-2 hover:scale-110 transition-transform " >+</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about' >
                            about
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar
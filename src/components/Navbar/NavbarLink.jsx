
const NavbarLink = ({href, text}) => {
    return (
        <a className="text-base text-white hover:text-blue-600" href="{href}">
            {text}
        </a>
    )
}

export default NavbarLink
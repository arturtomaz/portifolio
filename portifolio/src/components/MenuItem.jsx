function MenuItem(props) {
    return (
        <li>
            <h1>
                <a   href={props.link} className="text-[#DBEAB5] hover:text-[#F8F8F8] transition-colors duration-300">
                    {props.name}
                </a>
            </h1>
        </li>
    );
}

export default MenuItem;
/**
 * Converts a name property into an appropriate href value
 * @param {*} name the name of the NavbarLink
 * @returns the href value of the NavbarLink
 */
function getHref(name)
{
    name = name.toLowerCase();
    name = name.replace(" ", "-");
    return "#" + name;
}

function NavbarLink(props) {
    return (
      <a href={getHref(props.name)}>{props.name}</a>
    );
  }
  
  export default NavbarLink;
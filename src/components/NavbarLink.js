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
  // Sets the active page to the page corresponding with this link
  function setPage()
  {
    props.onSetPage(props.name);
  }

  return (
    <a href={getHref(props.name)} onClick={setPage}>{props.name}</a>
  );
}

export default NavbarLink;
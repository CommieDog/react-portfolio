import portrait from "../assets/images/profile-picture-small.jpg"

function Header() {
    return (
      <header>
        <h1>John Netzel</h1>
        <img src={portrait} alt="Portrait of John Netzel" title="Hello there!"/>
        <h2>Aspiring Web Developer</h2>
        <div>
          <p>3309 Rose Street</p>
          <p>Anchorage, Alaska 99508</p>
          <p>johnrnetzel@gmail.com</p>
        </div>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
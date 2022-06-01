import portrait from "../assets/images/profile-picture-small.jpg";
import bookend_screencap from "../assets/images/bookend-screenshot.png";
import employee_data_manager_screencap from "../assets/images/employee-data-manager-screencap.gif";
import javascript_gauntlet_screenshot from "../assets/images/javascript-gauntlet-quiz-screenshot.jpg";
import stock_portfolio_analyzer_screencap from "../assets/images/stock-portfolio-analyzer-screencap.gif";
import team_profile_generator_output_screenshot from "../assets/images/sample-team-webpage-screenshot.jpg";
import weather_companion_screenshot from "../assets/images/weather-portfolio-screenshot.jpg";
import resume from "../assets/pdf/John Netzel_Web Developer_Resume.pdf";

import Project from "./Project";

function Body(props){

  function getBodyContent()
  {
    switch(props.page)
    {
      case "About Me":
        return (
          <>
            <h2>About Me</h2>
            <img id="portrait" className="shadow" src={portrait} alt="Portrait of John Netzel" title="Hello there!"/>
            <p>I am an aspiring full stack web developer. Though I did not major in computer science in university (I went for geology instead), I did take a few programming courses and worked as a hobbyist on a few projects of my own. Though I never released anything publicly, I did learn the basics of software design and discovered an interest that I hope to turn into a career.</p>
            <p>I currently reside in Anchorage, Alaska, USA. On my off time, I enjoy video gaming, rock collecting, and hiking.</p>
          </>
        );
      case "Portfolio":
        return (
          <>
            <h2>Portfolio</h2>
            <div>
              <Project title="BookenD" imageSrc={bookend_screencap} imageAlt="BookenD Screenshot" description="Full stack application that allows readers to join a community of others in finding new books to read, viewing public book clubs, and creating their own clubs and inviting friends and family" demoLink="https://glacial-plateau-74113.herokuapp.com/" repoLink="https://github.com/CommieDog/bookend" />
              <Project title="Employee Data Manager" imageSrc={employee_data_manager_screencap} imageAlt="Employee Data Manager Screencap" description="An application to manage the departments, roles, and employees of a company" videoLink="https://drive.google.com/file/d/1zUpVbl-igHWvLIeFusxEpqub0PsaSEzK/view" repoLink="https://github.com/CommieDog/employee-data-manager" />
              <Project title="JavaScript Gauntlet" imageSrc={javascript_gauntlet_screenshot} imageAlt="JavaScript Gauntlet Screenshot" description="A webpage that presents a timed multiple-choice quiz on the basics of JavaScript" demoLink="https://commiedog.github.io/javascript-gauntlet/" repoLink="https://github.com/CommieDog/javascript-gauntlet" />
              <Project title="Stock Portfolio Analyzer" imageSrc={stock_portfolio_analyzer_screencap} imageAlt="Stock Portfolio Analyzer Screencap" description="Website for entering stock portfolio data and performing simple analysis" demoLink="https://commiedog.github.io/stock-portfolio-analyzer/" repoLink="https://github.com/CommieDog/stock-portfolio-analyzer" />
              <Project title="Team Profile Generator" imageSrc={team_profile_generator_output_screenshot} imageAlt="Team Protfolio Generator Output Screenshot" description="A Node.js command line application for building development team profile webpages" videoLink="https://drive.google.com/file/d/1qGDqRc18LTD__IcQv3e5-l_J0VGK44ae/view" repoLink="https://github.com/CommieDog/team-profile-generator" />
              <Project title="Weather Companion" imageSrc={weather_companion_screenshot} imageAlt="Weather Companion Screencap" description="A traveller's companion for planning trips based on present and future weather conditions" demoLink="https://commiedog.github.io/weather-companion/" repoLink="https://github.com/CommieDog/weather-companion" />
            </div>
          </>
        );
      case "Contact":
        return (
          <>
            <h2>Contact</h2>
            <form>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="contact-name" required></input>
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="contact-email" type="email" required></input>
              <label htmlFor="contact-message">Message</label>
              <input id="contact-message" name="contact-message" required></input>
              <button type="submit">Submit</button>
            </form>
          </>
        );
      case "Resume":
        return (
          <>
            <a href={resume} target="_blank" rel="noreferrer"><h2>Resume</h2></a>
            <ul className="list-group mx-5">
              <li className="list-group-item">Writing webpages that leverage many features of HTML 5 and CSS 3, including semantic HTML and responsive design</li>
              <li className="list-group-item">Writing webpages that use JavaScript and built-in APIs to dynamically generate content</li>
              <li className="list-group-item">Usage of third-party server side APIs to build data-rich webpages</li>
              <li className="list-group-item">Usage of Node.js to build command line and back end applications</li>
              <li className="list-group-item">Familiarity with popular third-party JavaScript libraries such as jQuery, Bootstrap, Express.js, and Sequelize</li>
              <li className="list-group-item">Writing programs using Java, such as the front end UI for an app that takes in components of construction jobs and outputs cost and labor estimates</li>
            </ul>
          </>
        );
      default:
        return (<p>Implement me! ({props.page})</p>)
    }
  }

  return (
    <main>
      {getBodyContent()}
    </main>
  );
}

export default Body;
import portrait from "../assets/images/profile-picture-small.jpg";
import bookend_screencap from "../assets/images/bookend-screenshot.png";
import employee_data_manager_screencap from "../assets/images/employee-data-manager-screencap.gif";
import javascript_gauntlet_screenshot from "../assets/images/javascript-gauntlet-quiz-screenshot.jpg";
import stock_portfolio_analyzer_screencap from "../assets/images/sample-team-webpage-screenshot.jpg";
import team_profile_generator_output_screenshot from "../assets/images/stock-portfolio-analyzer-screencap.gif";
import weather_companion_screenshot from "../assets/images/weather-portfolio-screenshot.jpg";

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
            <img src={portrait} alt="Portrait of John Netzel" title="Hello there!"/>
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
              <Project title="Employee Data Manager" imageSrc={employee_data_manager_screencap} imageAlt="Employee Data Manager Screencap" description="An application to manage the departments, roles, and employees of a company" demoLink="#" repoLink="https://github.com/CommieDog/employee-data-manager" />
              <Project title="JavaScript Gauntlet" imageSrc={javascript_gauntlet_screenshot} imageAlt="JavaScript Gauntlet Screenshot" description="A webpage that presents a timed multiple-choice quiz on the basics of JavaScript" demoLink="https://commiedog.github.io/javascript-gauntlet/" repoLink="https://github.com/CommieDog/javascript-gauntlet" />
              <Project title="Stock Portfolio Analyzer" imageSrc={stock_portfolio_analyzer_screencap} imageAlt="Stock Portfolio Analyzer Screencap" description="Website for entering stock portfolio data and performing simple analysis" demoLink="https://commiedog.github.io/stock-portfolio-analyzer/" repoLink="https://github.com/CommieDog/stock-portfolio-analyzer" />
              <Project title="Team Profile Generator" imageSrc={team_profile_generator_output_screenshot} imageAlt="Team Protfolio Generator Output Screenshot" description="A Node.js command line application for building development team profile webpages" demoLink="#" repoLink="https://github.com/CommieDog/team-profile-generator" />
              <Project title="Weather Companion" imageSrc={weather_companion_screenshot} imageAlt="Weather Companion Screencap" description="A traveller's companion for planning trips based on present and future weather conditions" demoLink="https://commiedog.github.io/weather-companion/" repoLink="https://github.com/CommieDog/weather-companion" />
            </div>
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
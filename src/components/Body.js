import portrait from "../assets/images/profile-picture-small.jpg"

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
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
              <Project title="Project" imageSrc="." imageAlt="." description="Description" demoLink="#" repoLink="#" />
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
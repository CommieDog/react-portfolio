import portrait from "../assets/images/profile-picture-small.jpg"

function Body(props){

  function getBodyContent()
  {
    switch(props.page)
    {
      case "About Me":
        return (
          <>
            <img src={portrait} alt="Portrait of John Netzel" title="Hello there!"/>
            <p>I am an aspiring full stack web developer. Though I did not major in computer science in university (I went for geology instead), I did take a few programming courses and worked as a hobbyist on a few projects of my own. Though I never released anything publicly, I did learn the basics of software design and discovered an interest that I hope to turn into a career.</p>
            <p>I currently reside in Anchorage, Alaska, USA. On my off time, I enjoy video gaming, rock collecting, and hiking.</p>
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
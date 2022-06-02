function Project(props) {

  function getDemoLink()
  {
    if (props.demoLink){
      return <a className="card-link" href={props.demoLink}>Deployed Demo</a>
    }
  }

  function getVideoLink()
  {
    if (props.videoLink){
      return <a className="card-link" href={props.videoLink}>Video Demo</a>
    }
  }

  return (
    <>
      <div className="col">
        <div className="card-container m-3 h-100">
          <div className="card h-100">
            <div className="card-header">
              <h3 className="card-title">{props.title}</h3>
            </div>
            <div className="card-body">
              <img className="card-img border border-dark border-2 shadow-sm" src={props.imageSrc} alt={props.imageAlt}/>
              <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
              {getDemoLink()}
              {getVideoLink()}
              <a className="card-link" href={props.repoLink}>GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
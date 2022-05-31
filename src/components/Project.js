function Project(props) {
  return (
    <div>
      <div className="col">
        <div className="card-container m-3">
          <div className="card h-100">
            <div className="card-header">
              <h3 className="card-title">{props.title}</h3>
            </div>
            <div className="card-body">
              <img className="card-img border border-dark border-2 shadow-sm" src={props.imageSrc} alt={props.imageAlt}/>
              <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
              <a className="card-link" href={props.demoLink}>Deployed Demo</a>
              <a className="card-link" href={props.repoLink}>GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
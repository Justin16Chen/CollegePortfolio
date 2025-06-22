export default function ProjectTemplate(props) {
  return (
    <div className="project-template">
      <h1>{props.title}</h1>
      <p>{props.instructions}</p>
      <p>{props.description}</p>
      {'cmuAcadLink' in props && <iframe  // only render if cmuAcadLink is defined
        width="410" height="460"
        src={props.cmuAcadLink} />}
    </div>
  );
}
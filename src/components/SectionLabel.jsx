// SectionLabel renders each section's own component name as a JSX-style
// tag — a small nod to the fact that this whole site is just typed
// components rendering data, not hardcoded markup.
import "./SectionLabel.css";

function SectionLabel({ tag, comment, index }) {
  return (
    <div className="section-label">
      {index && <span className="section-label__index">{index}</span>}
      <span className="section-label__jsx">
        <span className="section-label__bracket">{"<"}</span>
        {tag}
        <span className="section-label__bracket">{" />"}</span>
      </span>
      {comment && <span className="section-label__comment">// {comment}</span>}
    </div>
  );
}

export default SectionLabel;

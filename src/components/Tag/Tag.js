import "./Tag.scss";

function Tag({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <div key={index} className="tag-name">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tag;

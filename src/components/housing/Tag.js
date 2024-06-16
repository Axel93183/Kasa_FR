import "../../assets/sass/components/_housing/_tag.scss";

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

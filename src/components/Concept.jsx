export default function Concept({ title, image, description }) {
  return (
    <div className="concept">
      <li className="concept">
        <img image={image} src={image} alt={title} />

        <h2>{title}</h2>

        <p>{description}</p>
      </li>
    </div>
  );
}

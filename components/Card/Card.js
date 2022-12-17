import Image from "next/image";
export default function Card({ product }) {
  const { image, title, content, url } = product;
  return (
    <article className="card">
      <div className="card-picture">
        <Image
          src={image}
          alt="title"
          width={270}
          height={204}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="card-description">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Ver más
        </a>
      </div>
    </article>
  );
}

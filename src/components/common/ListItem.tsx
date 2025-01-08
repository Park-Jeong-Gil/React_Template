import { Link } from 'react-router-dom';
import { Photo } from '../../api/post';

export default function ListItem({ listInfo }: { listInfo: Photo }) {
  return (
    <li>
      <Link to={`/detail/${listInfo.id}`}>
        <picture>
          <source
            srcSet={listInfo.thumbnailUrl}
            type='image/webp'
          />
          <img
            src={listInfo.thumbnailUrl}
            alt={listInfo.title}
          />
        </picture>
        <strong>{listInfo.title}</strong>
      </Link>
    </li>
  );
}

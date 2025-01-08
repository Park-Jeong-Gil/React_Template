import { getPhotoItem, Photo } from '../../../api/post';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Meta from '../../layouts/Meta';

export default function ListDetail() {
  const { id } = useParams();
  const postId = id ? parseInt(id) : 0;

  const { data, isLoading, error } = useQuery<Photo[]>({
    queryKey: ['photo', postId],
    queryFn: () => getPhotoItem(postId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (data && !isLoading && !error) {
    return (
      <>
        <Meta
          title={`base - ${data[0].title}`}
          description='제품 상세 페이지 입니다.'
          keywords='제품 상세'
          url='https://www.barunsoncard.com/'
        />
        <div>
          <h2>상세 페이지 - {data[0].title}</h2>
          <picture>
            <source
              srcSet={data[0].thumbnailUrl}
              type='image/webp'
            />
            <img
              src={data[0].thumbnailUrl}
              alt={data[0].title}
            />
          </picture>
          <p>detail contents</p>
        </div>
      </>
    );
  }
}

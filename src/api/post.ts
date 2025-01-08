import { axiosInstance } from './axios';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const getPhotoList = async (id: number): Promise<Photo[]> => {
  const { data } = await axiosInstance.get(`/photos?albumId=${id}`);

  return data;
};

const getPhotoItem = async (id: number): Promise<Photo[]> => {
  const { data } = await axiosInstance.get(`/photos?id=${id}`);

  return data;
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPost = async (id = 1): Promise<Post> => {
  const { data } = await axiosInstance.get(`/comments?postId=${id}`);

  return data;
};

export { getPhotoList, getPhotoItem, getPost };

export type { Photo, Post };

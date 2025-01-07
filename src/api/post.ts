import { axiosInstance } from './axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async (id: number): Promise<Post[]> => {
  const { data } = await axiosInstance.get(`/posts${id}`);

  return data;
};

const getPost = async (id = 1): Promise<Post> => {
  const { data } = await axiosInstance.get(`/comments?postId=${id}`);

  return data;
};

export { getPosts, getPost };

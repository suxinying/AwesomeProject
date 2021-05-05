import request from './request';

export const getHomeContent = async () => {
  return await request.get('/home/content');
};

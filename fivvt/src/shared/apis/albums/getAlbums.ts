import {client} from '../axios';
import {IAlbum} from '@/domain/entitites/albums';

const albumsList: () => Promise<IAlbum[]> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/albums/`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке albumsList: ', error);
  }
};
export {albumsList};

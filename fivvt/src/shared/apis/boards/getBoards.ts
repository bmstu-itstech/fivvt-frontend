import {client} from '../axios';
import {IBoard} from '@/domain/entitites/board';

const boardsList: () => Promise<IBoard[]> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/board/`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке boardsList: ', error);
  }
};
export {boardsList};

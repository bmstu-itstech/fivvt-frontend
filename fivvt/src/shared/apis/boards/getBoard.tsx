import {client} from '../axios';
import {IBoard} from '@/domain/entitites/board';

const board: (id: number) => Promise<IBoard> = async (id)  => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/board/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке board: ', error);
  }
};
export {board};

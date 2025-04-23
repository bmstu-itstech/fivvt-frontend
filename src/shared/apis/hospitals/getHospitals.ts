import {client} from '../axios';
import { IHospital } from '@/domain/entitites/hospital';

const hospitalsList: () => Promise<IHospital[]> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/hospitals/`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке hospitalsList: ', error);
  }
};
export {hospitalsList};

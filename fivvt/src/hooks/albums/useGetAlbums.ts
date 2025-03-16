'use client';
import {useQuery} from '@tanstack/react-query';
import { albumsList } from '@/shared/apis/albums/getAlbums';
import { IAlbum } from '@/domain/entitites/albums';

export const useGetAlbums = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IAlbum[]>({
    queryKey: ['albums'],
    queryFn: albumsList,
  });

  return {data, isLoading, refetch, error};
};

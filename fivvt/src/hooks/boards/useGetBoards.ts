'use client';
import {useQuery} from '@tanstack/react-query';
import {boardsList} from '@/shared/apis/boards/getBoards';
import {IBoard} from '@/domain/entitites/board';

export const useGetBoards = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IBoard[]>({
    queryKey: ['boards'],
    queryFn: boardsList,
  });

  return {data, isLoading, refetch, error};
};

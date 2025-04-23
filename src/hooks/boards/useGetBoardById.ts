'use client';
import {useQuery} from '@tanstack/react-query';
import {board} from '@/shared/apis/boards/getBoard';
import {IBoard} from '@/domain/entitites/board';

export const useGetBoardById = (id: number) => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IBoard>({
    queryKey: ['board'],
    queryFn: () => board(id),
  });

  return {data, isLoading, refetch, error};
};

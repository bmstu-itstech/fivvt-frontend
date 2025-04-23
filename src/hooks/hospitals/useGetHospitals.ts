'use client';
import {useQuery} from '@tanstack/react-query';
import { hospitalsList } from '@/shared/apis/hospitals/getHospitals';
import { IHospital } from '@/domain/entitites/hospital';

export const useGetHospitals = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IHospital[]>({
    queryKey: ['hospitals'],
    queryFn: hospitalsList,
  });

  return {data, isLoading, refetch, error};
};

import {useState, type FC, useCallback} from 'react';
import type Props from './Pagination.props';
import {PaginationItem} from './components/PaginationItem';
export const Pagination: FC<Props> = ({
  itemsPerSlide,
  clickNext,
  clickPrev,
  countOfItems,
  className,
  ...props
}) => {
  const start = 1;
  const end = Math.ceil(countOfItems / itemsPerSlide);
  const [page, setPage] = useState(1);

  const NextPage = useCallback(() => {
    setPage(prev => (prev * itemsPerSlide <= countOfItems ? prev + 1 : prev));
    clickNext();
  }, [clickNext, countOfItems, itemsPerSlide]);
  const PrevPage = useCallback(() => {
    setPage(prev => (prev - 1 > 0 ? prev - 1 : 1));
    clickPrev();
  }, [clickPrev]);
  if (countOfItems <= itemsPerSlide) return;
  return (
    <div
      className={`${className} w-full border-t-2 border-gray-200 h-12 flex  justify-between items-center`}
      {...props}>
      <PaginationItem isCorner onClick={PrevPage}>{`< Предыдущая`}</PaginationItem>
      <div className='flex h-full w-fit gap-4'>
        <PaginationItem
          isChosen={page == 1}
          onClick={() => {
            setPage(1);
          }}>{`1`}</PaginationItem>
        {countOfItems > itemsPerSlide * 2 && (
          <>
            {page - 2 > start && (
              <PaginationItem
                inActive
                onClick={() => {}}>{`...`}</PaginationItem>
            )}
            {page - 1 > start && (
              <PaginationItem onClick={PrevPage}>{page - 1}</PaginationItem>
            )}

            {page > start && page < end && (
              <PaginationItem isChosen={page != 1} onClick={() => {}}>
                {page}
              </PaginationItem>
            )}
            {page + 1 < end && (
              <PaginationItem onClick={NextPage}>{page + 1}</PaginationItem>
            )}
            {page + 2 < end && (
              <PaginationItem
                inActive
                onClick={() => {}}>{`...`}</PaginationItem>
            )}

            <PaginationItem
              isChosen={page == end}
              onClick={() => {
                setPage(end);
              }}>{`${end}`}</PaginationItem>
          </>
        )}
      </div>

      <PaginationItem isCorner onClick={NextPage}>{`Следующая >`}</PaginationItem>
    </div>
  );
};

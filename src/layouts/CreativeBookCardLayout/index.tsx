import type {FC} from 'react';
import type Props from './CreativeBookCardLayout.props';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
export const CreativeBookCardLayout: FC<Props> = ({
  children,
  href,
  photo,
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      className={`${className} rounded-2xl group overflow-hidden p-4 flex justify-center items-end shadow relative h-full cursor-pointer hover:scale-105 duration-200 transition-all`}
      {...props}
      onClick={() => {
        router.push(href);
      }}>
      <Image
        src={photo}
        alt='book'
        width={400}
        height={400}
        className='object-center object-cover w-full h-full absolute top-0 left-0 group-hover:brightness-75'
      />
      {children}
    </div>
  );
};

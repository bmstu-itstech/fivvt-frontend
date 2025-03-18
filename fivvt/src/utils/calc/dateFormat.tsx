import React from 'react';
const DateFormat: React.FC<{children: string}> = ({children}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
  };
  return <>{formatDate(children)}</>;
};
export default DateFormat;

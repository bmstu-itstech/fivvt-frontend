import type { FC } from 'react'
import type Props from './Divider.props'

export const Divider: FC<Props> = ({isVertical = false, className, ...props}) => {
    return(
        <div className={`${isVertical? 'h-full w-0.5' : 'w-full h-0.5'} ${className}`} {...props} />
    )
}
'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <div className="flex flex-col items-center pl-8">
      <img
        src={'/logo/logo.png'}
        className={classNames('block w-[22.651px] h-[24.5px]', className)}
        alt='logo'
      />
      <div className="text-sm font-semibold mt-1 text-gray-700 whitespace-nowrap">大模型应用平台</div>
    </div>
  )
}

export default LogoSite

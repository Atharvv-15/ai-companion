import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const Authlayout: FC<layoutProps> = ({children}) => {
  return <div className="w-full h-full flex items-center justify-center">{children}</div>
}

export default Authlayout
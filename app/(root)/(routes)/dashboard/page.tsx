import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { FC } from 'react'
import SearchInput  from '@/components/SearchInput'
import prismadb from '@/lib/prismadb'
import Categories from '@/components/Categories'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
  const categories = await prismadb.category.findMany();
  return (
    <div className='p-4 space-y-2 h-full'>
        <SearchInput/>
        <Categories data ={categories}/>
    </div>
  )
}

export default page
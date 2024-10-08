'use client'
import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'
import qs from 'query-string'

interface CategoriesProps {
  data : Category[]
}

const Categories: FC<CategoriesProps> = ({data}: CategoriesProps) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryId = searchParams.get('categoryId')

  const onCategoryClick = (id: string | undefined) => {
    const query = {
      categoryId: id,
    };
    const url = qs.stringifyUrl({
      url : window.location.href,
      query: query,
    })
      router.push(url);
    }

    return (
      <div className='w-full overflow-x-auto space-x-2 flex p-1'>
          <button 
              onClick={() => onCategoryClick(undefined)} 
              className={cn(`
                 flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3
                 rounded-md bg-primary/10 hover:opacity-75 transition 
              `, !categoryId && 'bg-primary/25')}>
                  Newest
  
          </button>
          {data.map((category) => (
              <button 
              onClick={() => onCategoryClick(category.id)}
              key={category.id}
              className={cn(`
                  flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3
                  rounded-md bg-primary/10 hover:opacity-75 transition 
               `, categoryId === category.id && 'bg-primary/25')}>
               {category.name}
   
           </button>
          ))}
      </div>
    )
  }
  


export default Categories
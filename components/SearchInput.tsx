'use client'
import { Search } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'
import qs from 'query-string'

interface SearchInputProps {
  
}

const SearchInput: FC<SearchInputProps> = ({}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryId = searchParams.get('categoryId')
  const name = searchParams.get('name')

  const [value, setValue] = useState(name || '')
  const debounceValue = useDebounce(value, 500)

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    const query = {
      name: debounceValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl({
      url: window.location.href,
      query: query,
    },{skipEmptyString: true, skipNull: true});

    router.push(url)
  ,[debounceValue, categoryId, router]})

  return(
    <div className='relative'>
        <Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
        <Input
        onChange={onSearchChange}
        value={value}
        placeholder='Search...'
        className='pl-10 bg-primary/10'
        />

        
    </div>
  )
}

export default SearchInput
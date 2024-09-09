'use client'
import { Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { ModeToggle } from './ui/mode-toggle'
import  MobileSidebar  from './MobileSidebar'

const font = Poppins({
    weight: '600',
    subsets: ['latin'],
})

const Navbar : FC = ({}) => {
  return <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10
  bg-secondary h-16'>
    <div className='flex items-center'>
        <MobileSidebar/>
        <Link href='/dashboard'>
        <h1 className={cn('hidden md:block text-xl md:text-3xl font-bold text-primary leading-10', font.className)}>companion.ai</h1>
        </Link>
    </div>

    <div className='flex items-center gap-x-3'>
        <Button size='sm' variant={'premium'}> 
            Upgrade
            <Sparkles className='ml-2 h-4 w-4 fill-white text-white'/>
        </Button>
        <ModeToggle/>
        <UserButton/>
    </div>
  </div>
}

export default Navbar
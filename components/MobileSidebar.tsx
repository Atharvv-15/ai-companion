import { FC } from 'react'
import {Menu} from 'lucide-react'
import Sidebar from './Sidebar'

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'



interface MobileSidebarProps {
  
}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden pr-4'>
            <Menu className='h-6 w-6'/>
        </SheetTrigger>
        <SheetContent className='w-32 bg-secondary p-0 pt-10' side={'left'}>
            <Sidebar/>
        </SheetContent>
    </Sheet>
    )
}

export default MobileSidebar
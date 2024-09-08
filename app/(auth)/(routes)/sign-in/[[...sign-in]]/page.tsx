import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex flex-col justify-center items-center my-auto mt-20'><SignIn/></div>
}
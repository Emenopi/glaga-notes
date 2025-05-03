import Link from 'next/link'

export default async function Navbar() {
   
    return (
      <div className='flex w-[95vw] justify-between p-10 pl-14 pt-32 bg-[#0e0d15]'>
      <Link href={'/'}>Home</Link>
      Algorithmics
      <Link href={'/dsf'}>DSF</Link>
      </div>
    )
  }
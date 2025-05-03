import Link from 'next/link'

export default async function Sidebar({topics}) {
   
    return (
      <ul className='p-20 text-black'>
        <li><Link href={'/'}>Home</Link></li>
        {
          topics.map((topic) => (<li key={`${topic}`} className='py-5'>{topic}</li>))
        }
      </ul>
    )
  }
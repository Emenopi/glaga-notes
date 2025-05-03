import Link from 'next/link'

export default async function Sidebar() {
   
    return (
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li>Topic 1</li>
        <li>Topic 2</li>
      </ul>
    )
  }
import Header from "../Header"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

export default async function Page() {

  const topicList = [
    'Numpy & Vectorised Compution',
    'Visualisation',
    'Computational Linear Algebra',
    'Numerical Optimisation',
    'Probability & Statistics'
  ]  

   
    return (
      <>
      <Header />
      <Navbar />
      <div className="flex flex-row gap-x-10 p-10">
        <div className="basis-1/8 bg-rose-300 rounded-md">
        <Sidebar topics={topicList} />
        </div>
        <div className="basis-7/8 bg-sky-950 rounded-md">
        </div>
      </div>
      </>
    )
  }
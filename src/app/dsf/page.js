import Header from "../Header"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

export default async function Page() {

  const topicList = ['topic 1', 'topic 2', 'topic 3', 'topic 4', 'topic 5', 'topic 6', 'topic 7', 'topic 8']  

   
    return (
      <>
      <Header />
      <Navbar />
      <div className="flex flex-row p-10">
        <div className="basis-1/8 bg-pink-200">
        <Sidebar topics={topicList} />
        </div>
        <div className="basis-7/8"></div>
      </div>
      </>
    )
  }
import { useState } from 'react'
import CreatePost from '../Components/CreatePost'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import PostList from '../Components/PostList'
import Sidebar from '../Components/Sidebar'
import PostListProvider from '../store/PostsListStore'

import "bootstrap/dist/css/bootstrap.min.css"
import '../routes/App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App

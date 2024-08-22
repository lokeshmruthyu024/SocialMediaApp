import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost, { createPostAction } from './Components/CreatePost.jsx';
import PostList from './Components/PostList.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/', element: <PostList /> },
      { path: '/createpost', element: <CreatePost />, action: () => { createPostAction } }
      ,
    ]
  },

]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

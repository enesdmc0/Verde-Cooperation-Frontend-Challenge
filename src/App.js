import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
const App = () => {
  const Layout = () => {
    return (
        <div>
          <Header/>
          <Outlet/>
        </div>
    )
  }
  const router = createBrowserRouter([
      {
          path: "/",
          element: <Layout/>,
          children: [
              {
                  path: "/",
                  element: <Home/>
              },
              {
                  path: "/post/:id",
                  element: <Post/>
              },
              {
                  path: "/newPost",
                  element: <NewPost/>
              }
          ],
      },
  ])
    return <RouterProvider router={router}/>
}

export default App;

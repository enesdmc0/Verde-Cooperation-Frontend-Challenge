import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import PageContainer from './components/PageContainer';
import Login from './pages/Login';
const App = () => {
  const Layout = () => {
    return (
        <>
          <PageContainer>
              <Header/>
              <Outlet/>
          </PageContainer>
        </>
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
      {
          path: "/login",
          element: <Login />,
      },
  ])
    return <RouterProvider router={router}/>
}

export default App;

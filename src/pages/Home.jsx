import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Posts from '../components/Posts';
import {getPosts} from '../redux/services';
import {allPosts} from '../redux/postsSlice';

const Home = () => {
    const posts = useSelector(allPosts);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getPosts());
    }, [dispatch]);
    console.log(posts)
    return (
        <div className="home">
            {posts && posts.map(post => (
                <Posts props={{...post}} key={post.id}/>
            ))}
        </div>
    );
};

export default Home;

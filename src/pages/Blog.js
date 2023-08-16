import { useLoaderData } from 'react-router-dom';

import PostList from '../components/PostList';

function BlogPage() {
	const posts = useLoaderData();
	return <PostList posts={posts} />;
}

export default BlogPage;

export function loader() {
	return fetch(`${process.env.REACT_APP_FIREBASE_URL}/posts.json`);
}

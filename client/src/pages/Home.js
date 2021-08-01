import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';
import gql from 'graphql-tag';

import PostCard from '../components/PostCard';
const FETCH_POSTS_QUERY = gql`
	{
		getPosts {
			id
			body
			username
			createdAt
			likes {
				username
			}
			comments {
				id
				username
				createdAt
			}
		}
	}
`;

function Home() {
	const {
		loading,
		data,
	} = useQuery(FETCH_POSTS_QUERY);
	if (data){
		var posts = data.getPosts

	return (
		<Grid columns={3}>
			<Grid.Row className="page-title">
				<h1>Recent Posts</h1>
			</Grid.Row>
			<Grid.Row>
				{loading ? (
					<h1>Loading posts..</h1>
				) : (
					<Transition.Group>
						{posts &&
							posts.map((post) => (
								<Grid.Column
									key={post.id}
									style={{
										marginBottom: 20,
									}}
								>
									<PostCard post={post} />
								</Grid.Column>
							))}
					</Transition.Group>
				)}
			</Grid.Row>
		</Grid>
	);}
	else{
		return(
			<h1>Loading posts</h1>
		)
	}
}

export default Home;

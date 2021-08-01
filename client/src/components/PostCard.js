import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';


function PostCard({ post: { body, createdAt, id, username, likes } }) {

	function likePost(){

	}
	function commentOnPost(){

	}
	return (
		<Card fluid>
			<Card.Content>
				<Image
					floated="right"
					size="mini"
					src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
				/>
				<Card.Header>{username}</Card.Header>
				<Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
				<Card.Description>{body}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<p>
					<Button as="div" labelPosition="right" >
						<Button icon color="red">
							<Icon name="heart" />
							Like
						</Button>
						<Label as="a" basic pointing="left">
							2,048
						</Label>
					</Button>
				</p>
			</Card.Content>
		</Card>
	);
}

export default PostCard;

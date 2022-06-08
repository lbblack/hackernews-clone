import React, { Component } from 'react';
import Card from './Card.js';

class Posts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			new_stories: "https://hacker-news.firebaseio.com/v0/newstories.json",
			top_stories: "https://hacker-news.firebaseio.com/v0/topstories.json",
			page: this.props.page
		}

		this.nextPage = this.nextPage.bind(this);
	}

	// todo: need to properly load the data

	loadPosts(data) {
		const page = this.state.page;
		this.setState(state => ({
			data: data.splice((page * 30), (page * 30 + 30))
		}));
	}

	nextPage(e) {
		e.preventDefault();
		this.setState(state => ({
			page: this.state.page + 1
		}));

		this.componentDidMount();
	}

	componentDidMount() {
		fetch(this.state.top_stories)
			.then(response => response.json())
	        .then(data => this.loadPosts(data));
	}

	render() {
		return (
			<div class="posts">
				<table>
					<tbody>
						<tr><td id="spacer"></td></tr>
						{this.state.data.map((item, index) => (
							<>
								<Card item={item} number={index + 1} />
							</>
						))}
						<tr><td id="double-spacer"></td></tr>
					</tbody>
				</table>
				
				<strong><a href="#" onClick={this.nextPage} id="next-page">More</a></strong>
				<hr/>
			</div>
		);
	}
}

export default Posts;
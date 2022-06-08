import React, { Component } from 'react';
import moment from 'moment';

class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item_article: "https://hacker-news.firebaseio.com/v0/item/",
			item_article_ending: ".json",
			data: [],
			url: "",
			time: ""
		}
	}

	loadCard(data) {
		this.setState(state => ({
			data: data
		}));

		console.log(data);

		this.setState(state => ({
			time: moment(new Date(this.state.data.time*1000)).fromNow()
		}));
	}

	componentDidMount() {
		fetch(this.state.item_article + this.props.item + this.state.item_article_ending)
			.then(response => response.json())
			.then(data => this.loadCard(data))
			.then(() => {
				// make the URL prettier
				try {
					const url = this.state.data.url;
					let temp = "";
					if (url.length > 0 && !url.includes('github')) {
						temp = url.replace('https://', '')
								  .replace('http://', '')
							      .replace('www.', '');
						temp = temp.substring(0, temp.indexOf('/'));
					} else if (url.length > 0) {
						temp = url.replace('https://', '')
								  .replace('http://', '')
								  .replace('www.', '');
						temp = temp.substring(0, temp.indexOf('/', temp.indexOf('/') + 1));
					}

					if (temp.length > 0) {
						temp = '(' + temp + ')';
					}

					this.setState(state => ({
						url: temp
					}));
				} catch (e) {
					// console.log(e);
				}
			});
	}

	render() {
		return (
			<>
				<tr>
					<td class="number">
						{this.props.number}.
					</td>
					<td class="upvote" align="left">
						▲
					</td>
					<td align="left">
						<a class="title" href={this.state.data.url}>
							{this.state.data.title}
						</a>
						<span class="shortened-url" align="left">
							{this.state.url}
						</span>
					</td>
				</tr>

				<tr id="card-details">
					<td></td>
					<td></td>

					<td>
						{this.state.data.score} points by {" "}
						{this.state.data.by} {this.state.time} {" "}
						|
						hide
						|
						{" "}
						{this.state.data.descendants} comments
					</td>
				</tr>
				<tr>
					<td id="spacer"></td>
				</tr>
			</>
		)
	}
}

export default Card;
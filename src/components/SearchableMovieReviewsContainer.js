// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews.js';

export default class SearchableMovieReviewsContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			reviews: [],
			searchTerm: ""
		}
	}

	render() {
		return (<div className="searchable-movie-reviews">
			<MovieReviews reviews={this.state.reviews.filter(review => review.display_title.includes(this.state.searchTerm))} />
		</div>)
	}
}




import React from "react";
import helpers from "./utils/helpers";


import Query from "./Query";
import Results from "./Results";


class Search extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			searchQuery: "",
			startYear: "",
			endYear: "",
			articles: [] 
		}

		this.setSearch = this.setSearch.bind(this);
		this.saveArticle = this.saveArticle.bind(this);

	}

	setSearch(searchQuery, startYear, endYear) {

		this.setState({
			searchQuery: searchQuery,
			startYear: startYear,
			endYear: endYear
		});
	}

	saveArticle(event) {

		var index = event.target.value;
		console.log(event.target.value);

		helpers.saveArticle(this.state.articles[index]).then((response) => {

			var currentArticles = this.state.articles;

			currentArticles.splice(index, 1);

			this.setState({ articles: currentArticles });

		});
	}
	
	componentDidUpdate(prevProps, prevState) {

		//If search queries have changed, perform new search.
    
		if (prevState.searchQuery !== this.state.searchQuery || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {

			helpers.searchArticles(this.state.searchQuery, this.state.startYear, this.state.endYear).then(response => {

				if (response !== this.state.articles) {

					this.setState({ articles: response });

				}
      		});
   		}
	}

	render() {

		if (this.state.articles.length !== 0) {
			return (
	    		<div>
	    			<Query setSearch={this.setSearch} />
	    			<Results newResults={this.state.articles} saveArticle={this.saveArticle} />
	    		</div>
	    	);
	    }

	    else {

	    	return (
	    		<div className="container">
	    			<Query setSearch={this.setSearch} />
	    		</div>
	    	);

	    }
	}
};

export default Search;
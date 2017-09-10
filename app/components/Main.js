
import React from "react";

import {Link} from "react-router";

class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
	      <div className="container">
	        <div className="jumbotron">
	          <h2><strong>NY Times Article Scrubber</strong></h2>
	          <p><em>Search for and annotate articles of interest!</em></p>
	          <hr />
	        </div>

	        <div className="row">

	          {/* Shows child components. */}
	          {this.props.children}

	        </div>

	      </div>




		);


	}
};

export default Main;
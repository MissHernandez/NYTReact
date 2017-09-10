
import React from "react";

class Results extends React.Component {

	constructor(props){

		super(props);
	}

	render() {

	    return (

			<div className="container">
				<div className="panel panel-default">
					
					<div className="panel-heading">
						<h2 className="panel-title">Results</h2>
					</div>
					
					<div className="panel-body">

					    {this.props.newResults.map((search, i) => {

			          		return (

					            <div className="well" key={i}>

					            	<h4>{search.headline.main}</h4>

							            <button 
							            	value={i}
							              	className="btn btn-default btn-danger"
							              	onClick={this.props.saveArticle}> 
							              	Save
							            </button>

							            <a href={search.web_url} target="_blank"><button className="btn btn-default btn-primary">View Article</button></a>
							              
							            <p>Publication date: {search.pub_date}</p>

					            </div>
			          		);
			        	})}

			  		</div>
			  		
				</div>
	      </div>
    ); 
  }
}

export default Results;	
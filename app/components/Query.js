
import React from "react";

class Query extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			searchQuery: "",
			startYear: "",
			endYear: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {

		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

	}

	handleSubmit(event) {

		event.preventDefault();

		this.props.setSearch(this.state.searchQuery, this.state.startYear, this.state.endYear);

		this.setState({
			searchQuery: "",
			startYear: "",
			endYear: ""
		})

		console.log(this.state.searchQuery);
		console.log(this.state.startYear);
		console.log(this.state.endYear);

	}

	render() {
		
		return(

			<div className="container">
				<div className="panel panel-default">
					
					<div className="panel-heading">
						<h2 className="panel-title">Search</h2>
					</div>
					
					<div className="panel-body">
						<form onSubmit={this.handleSubmit}>
							
							<div className="form-group">
								<label>Topic</label>
									<input 
										type="text" 
										className="form-control" 
										value={this.state.searchQuery}
										id="searchQuery" 
										onChange={this.handleChange}
									/>
							</div>

							<div className="form-group">
								<label>Start Year</label>
									<input 
										type="text" 
										className="form-control" 
										value={this.state.startYear}
										id="startYear" 
										onChange={this.handleChange}
									/>
							</div>

							<div className="form-group">
								<label>End Year</label>
									<input 
										type="text" 
										className="form-control" 
										value={this.state.endYear}
										id="endYear" 
										onChange={this.handleChange}
									/>
							</div>

							<button type="submit" className="btn btn-default" onSubmit={this.handleSubmit}>Submit</button>
						
						</form>
					</div>
				
				</div>
			</div>

		)
	}
};


export default Query;
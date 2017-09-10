
import React from "react";
import helpers from "./utils/helpers";

class Saved extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      savedArticles: []
    }

    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount() {

    helpers.getArticles().then(response => {
      
      this.setState({articles: response});

    });
  }

  deleteArticle(event){

    helpers.deleteArticle(event.target.value).then(() => {

      helpers.getArticles().then(response => this.setState({articles: response}));
    });
  }

  render() {

    // If there are articles saved, it renders a panel with the articles
    if (this.state.articles.length !== 0) {

      return (
        <div className="container">
          <div className="panel panel-default">

            <div className="panel-heading">
              <h3 className="panel-title"><strong>Saved Articles</strong></h3>
            </div>

            <div className="panel-body">
              {this.state.articles.map(search => {
                return (
                  <div className="well" key={search._id}>
                    <h4>{search.title}</h4>

                    <button 
                      value={search._id} 
                      className="btn btn-default btn-danger" 
                      onClick={this.deleteArticle}>
                      Delete
                    </button>

                    <a href={search.url} target="_blank">
                      <button className="btn btn-default btn-primary view">
                        View Article
                      </button>
                    </a>

                    <p>Publication Date: {search.date}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            You have no articles saved!
          </div>
        </div>
      </div>
    );

  }
}

export default Saved;

// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

import moment from "moment";


// Helper Functions (Search NYT articles, read, post, and delete articles from database.)
const helpers = {

  	searchArticles: (searchQuery, startYear, endYear) => {

  		var APIKey = "18c410c7ad2045e2b9fe1b7ea973f7f2";

  		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=" + searchQuery;

  		if (startYear) {
  			queryURL += "&start_date=" + startYear + "0101";
  		}

  		if (endYear) {
  			queryURL += "&end_date=" + endYear + "1231";
  		}

  		console.log(queryURL);

		return axios.get(queryURL).then((response) => {
			
			var limit = 5;
			var newArticles = [];
			var newData = response.data.response.docs;

		    for (let i=0; i < limit; i++){

		    	newArticles.push(newData[i]);

		    	console.log(newArticles);

		    }

			return newArticles;
		});
	},

	getArticles: () => {

    	return axios.get("/api/saved")
    		.then(response => {

        		return response.data;
      
      		});
  	},
  	
  	saveArticle: function(article){
  		console.log(article.headline.main);
  		console.log(article.pub_date);
  		console.log(article.web_url);

  		var article = {
  			title: article.headline.main,
  			date: article.pub_date,
  			url: article.web_url
  		};


  		return axios.post("/save-article", article); 
  	},

  	deleteArticle: function(id){
	
		return axios.delete("/api/saved/" + id);
  
  	},

};

// Export helpers
export default helpers;

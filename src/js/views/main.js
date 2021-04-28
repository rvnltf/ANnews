import '../components/jumbotron.js';
import '../components/headline-news.js';
import '../components/search-bar.js';
import '../components/profile-bar.js';

function main() {
    const baseUrl = 'https://newsapi.org/v2';
    const apiKey = 'apiKey=f2d84a9f0348417cb36028b1ef4680b8';
    const country = 'country=id';
    
    const getJumbotron = async () => {
        try{
            const response = await fetch(`${baseUrl}/top-headlines?${apiKey}&${country}&pageSize=1`);
            const responseJson = await response.json();
            renderJumbotron(responseJson.articles);
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const getHeadlines = async (searchData = "sortBy=popularity") => {
        try{
            const response = await fetch(`${baseUrl}/top-headlines?${apiKey}&${country}&${searchData}`);
            const responseJson = await response.json();
            renderHeadlines(responseJson.articles);
        } catch (error) {
            showResponseMessage(error);
        }
    };
    
    const renderHeadlines = (articles) => {
        const headlineElement = document.querySelector("headline-news");
        headlineElement.articles = articles;
    };
    
    const renderJumbotron = (articles) => {
        const jumbotronElement = document.querySelector("jumbotron-news");
        articles.forEach(data => {
            jumbotronElement.detail = data;
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getJumbotron();
        getHeadlines();
    });
}

export default main;
import './headline-item.js';
class HeadlineNews extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set articles(articles){
        this._articles = articles;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    margin: 0 -5px;
                }
            </style>
        `;
        this._articles.forEach(article => {
            const headlineItemElement = document.createElement("headline-item");
            headlineItemElement.article = article;
            this.shadowDOM.appendChild(headlineItemElement);
        });
    }
}

customElements.define('headline-news', HeadlineNews);
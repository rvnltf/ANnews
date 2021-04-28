
class HeadlineItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set article(article){
        this._article = article;
        this.render();
    }

    render(){
        const tanggal = new Date(this._article.publishedAt);

        this.shadowDOM.innerHTML = `
        <style>
        .post-title {
            margin-top: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
        .post-description a {
            background-color:rgba(192,192,192,0.3);
            text-decoration: none;
            padding: 0 3px;
            border-radius: 3px;
            color: black;
        }
        .post-description a:hover {
            background-color:rgba(192,192,192,0.7);
        }
        </style>
        <div class="post">
            <h2 class="post-title">${this._article.title}</h2>
            <p class="post-meta">${tanggal.toDateString()} by ${this._article.author?this._article.author:"Anonim"}</p>
            <p class="post-description">${this._article.description}<a href="${this._article.url}">...</a></p>
        </div>
        <hr/>
        `;
    }
}

customElements.define("headline-item", HeadlineItem);
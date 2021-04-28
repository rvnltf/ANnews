import 'bootstrap/dist/css/bootstrap.min.css';
class Jumbotron extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set detail(detail){
        this._detail = detail;
        this.render();
    }

    render(){
            this.shadowDOM.innerHTML = `
            <style>
            .jumbotron {
                position: relative;
                height: 500px;
                background-image: url("${this._detail.urlToImage}");
                background-size: cover;
                background-position: center;  
            }
            .headline-text {
                position: absolute;
                width: 100%;
                background-color:rgba(192,192,192,0.3);
                bottom: 0;
            }
            .text{
                padding: 30px;
            }
            .text h1 {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            </style>
            <div class="jumbotron">
                <div class="headline-text">
                    <div class="text">
                        <h1>${this._detail.title}</h1>
                        <p class="lead">${this._detail.description}</p>
                    </div>
                </div>
            </div>
            `;
    }
}
customElements.define("jumbotron-news", Jumbotron);
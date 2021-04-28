class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        input {
            width: 200px;
            display: inline-block;
            background-color: transparent;
            border-color: transparent;
            border-bottom: 1px solid #1c87c9;
            outline: none;
            padding: 12px;
            color: white;
        }

        input:after {
            display:block;
            content: '';
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
        }
        
        input.searchElement:after {
            transform-origin:100% 50%; 
        }
        button {
            display: inline-block;
            border: none;
            background-color: transparent;
            border: 1px solid #1c87c9;
            color: white;
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            font-size: 17px;
            cursor: pointer;
            }

            button:hover {
                background-color: #1c87c9;
            }
            
            @media screen and (max-width: 600px) {
            }
        </style>
        <div class="search-container">
            <input type="search" placeholder="Search news. . ." name="search" id="searchElement" class="searchElement">
            <button type="submit" id="searchButtonElement">Search</button>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
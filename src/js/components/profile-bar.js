import foto from "../../img/Foto.jpg";

class ProfileBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowDOM.innerHTML = `
        <style>
        .profile {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: auto;
            text-align: center;
            font-family: arial;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
        }

        .title {
            color: grey;
            font-size: 18px;
        }

        button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
            font-size: 18px;
        }

        a {
            text-decoration: none;
            font-size: 22px;
            color: black;
        }
        button:hover, a:hover {
            opacity: 0.7;
        }
        </style>
        <div class="profile">
          <img src="${foto}" alt="A. Rivan M. Latief" width="1200" height="1800" style="width: 258px; height: 258px; object-fit: cover;">
          <h3>A. Rivan M. Latief</h3>
          <p class="title">Web Developer</p>
          <p><button>Contact</button></p>
        </div>
        `;
    }
}

customElements.define("profile-bar", ProfileBar);
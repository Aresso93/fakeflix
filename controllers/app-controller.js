class AppController{

    constructor(){

        this.shows = [];

    }

    init(){
        this.render();
        DBService.getAllShows().then(shows =>{
            this.shows = shows;
            this.renderShows();
        }) 
    }

    render(){

        const appContainer = document.getElementById('app');
        
        appContainer.innerHTML = `
    <header>
        <h1>Netflix Score</h1>
        <a href="./index.html">Lista</a>
        <a href="./new-show.html">Nuovo</a>
    </header>
    <main>
        <div id="btn-container">
        </div>
        <ul id="shows-container"></ul>
    </main>
    <footer>
        <p>copyright 2023</p>
    </footer>
    `
        

    }

    renderShows(){


        const btnContainer = document.getElementById('btn-container');

        btnContainer.innerHTML = '';

        const sortUpBtn = document.createElement('button');
        sortUpBtn.appendChild(document.createTextNode('Ordina per upvotes'));
        sortUpBtn.addEventListener('click', () => this.sortByUpvotes())
        btnContainer.appendChild(sortUpBtn);

        const sortDownBtn = document.createElement('button');
        sortDownBtn.appendChild(document.createTextNode('Ordina per downvotes'));
        sortDownBtn.addEventListener('click', () => this.sortByDownvotes())
        btnContainer.appendChild(sortDownBtn);



        const showContainer = document.getElementById('shows-container');

        showContainer.innerHTML = '';

        for (let i = 0; i < this.shows.length; i++) {
            const show = this.shows[i];
            
            const listElement = document.createElement('li');
            
            const upvotesSpan = document.createElement('span');
            upvotesSpan.appendChild(document.createTextNode(show.upvotes));
          
            const upvoteButton = document.createElement('button');
            upvoteButton.appendChild(document.createTextNode('👍🏻'))
            upvoteButton.addEventListener('click', () => this.upvoteShow(show))
            
            const downvoteSpan = document.createElement('span');
            downvoteSpan.appendChild(document.createTextNode(show.downvotes));

            const downvoteButton = document.createElement('button');
            downvoteButton.appendChild(document.createTextNode('👎🏻'))
            downvoteButton.addEventListener('click', () => this.downvoteShow(show))

            const titleNode = document.createTextNode(show.title);
            
            listElement.appendChild(titleNode);
           
            listElement.appendChild(upvoteButton);
            listElement.appendChild(upvotesSpan);
           
            listElement.appendChild(downvoteButton);
            listElement.appendChild(downvoteSpan);
            showContainer.appendChild(listElement);

        }

    }

    upvoteShow(show){

        DBService.upvote(show).then(show =>{
            this.renderShows();
        })

    }

    downvoteShow(show){

        DBService.downvote(show).then(show =>{
            this.renderShows();
        })

    }

    sortByUpvotes(){

        this.shows.sort((s1, s2) => s1.upvotes - s2.upvotes);
        this.renderShows();

    }

    sortByDownvotes(){

        this.shows.sort((s1, s2) => s1.downvotes - s2.downvotes);
        this.renderShows();

    }

}
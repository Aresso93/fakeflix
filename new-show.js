console.log('new show');

function sendData(event){
    console.log(event);
    event.preventDefault();

    const form = document.forms['create'];  //questo fa la stessa cosa di getElementById, ma è specifico per le forms

    // const title = form['title'].value;

    const formData = new FormData(form);

    console.log(formData);

    const newShow = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,             //questa cosa la devo mettere perché la form non restituisce true o false, bensì una stringa che dice "on" se true e "off" se false
        upvotes: 0,
        downvotes: 0
    }

    DBService.createShow(newShow).then(show => window.location = './index.html')
    .catch(error => alert.apply(error.message));

}
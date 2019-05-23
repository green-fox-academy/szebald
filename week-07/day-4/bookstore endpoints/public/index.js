window.onload = () => {
  let alltitleReq = new XMLHttpRequest();
  alltitleReq.open('GET', 'http://localhost:3000/alltitle', true);
  alltitleReq.send();
  alltitleReq.onload()= (data) => {
    let books = JSON.parse(data.target.response);
    for (let i = 0; i < books.length; i++){
      let div = document.querySelector('div')
      let listElement = document.createElement('p');
      listElement.innerHTML = books[i].book_name;
      div.appendChild(listElement);
    }
  }
}
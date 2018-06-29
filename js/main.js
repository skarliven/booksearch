// this is for the function and the event listener
function bookSearch(){
	var search=document.getElementById('search').value
	document.getElementById('results').innerHTML=""

	var originalURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
	// this is for the ajax
	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" +search,
		dataType:"json",
		success:function(data){
			var results=document.getElementById('results')
			for(i=0; i<data.items.length;i++){
				var book = "<div class='bk'><h1>" + data.items[i].volumeInfo.title + "</h1><p class='desc'>" + data.items[i].volumeInfo.description + "</p><img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "'>";
				document.body.innerHTML += book;
			}
		
		},
		type:"GET"
	});
}
document.getElementById('button').addEventListener('click',bookSearch,false)
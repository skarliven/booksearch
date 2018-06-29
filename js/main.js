// this is for the function and the event listener
function bookSearch(){
	var search=document.getElementById('search').value
	document.getElementById('results').innerHTML=""
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
			// 	// this is fo the title of the book
			// 	results.innerHTML+="<h1>"+"Title: " +data.items[i].volumeInfo.title +"</h1>"
			// 	// this is for the author of the book
			// 	results.innerHTML+="<h3>"+"Authers: "+data.items[i].volumeInfo.authors+"</h3>"
			// 	// this is for the id no of the books.
			// 	results.innerHTML+="<p>"+"Id No: "+data.items[i].id +"</p>"
			// 	// this is for the image of the books
			// 	results.innerHTML+="<img src='"+data.items[i].volumeInfo.imageLinks.thumbnail+"'>"
			// 	// this is for the description of the books.
			// 	results.innerHTML+="<p class='des'>"+data.items[i].volumeInfo.description+"</p>"
			// }
		},
		type:"GET"
	});
}
document.getElementById('button').addEventListener('click',bookSearch,false)
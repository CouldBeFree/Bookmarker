document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
      name: siteName,
      url: siteUrl
    };

    if(localStorage.getItem('bookmarks') === null){

        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    e.preventDefault();
}

function fetchingBookmarks() {

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');
    bookmarksResults.innerHTML = '';

    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>'+name+
                                      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="_blank" href="#">Delete</a>' +
                                      '</h3>'+
                                      '</div>';
    }
}
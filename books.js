let books =[{title:"The Hobbit", author:"J.R.R. Tolkien", maxPages: 200, onPage: 60}, 
{title:"Harry Potter", author:"J.K. Rowling", maxPages: 250, onPage: 150 },
{title:"50 Shades of Grey", author:"E. L. James", maxPages: 150, onPage: 150 },
{title:"Don Quixote", author:"Miguel de Cervantes", maxPages: 350, onPage: 300 },
{title:"Hamlet", author:"William Shakespeare", maxPages: 550, onPage: 550}]
function printBooks()
      {
        let ourBooks = "";
        for(let i=0; i < books.length; i++)
        {
          ourBooks += "<li>" + books[i].title + " by " + books[i].author+"</li>"
        }       
        return ourBooks 
      }   
      document.getElementById("list1").innerHTML=printBooks()
      function checkPages()
      {
        let progress=""
        for(let i=0; i < books.length; i++)
        {
          if (books[i].onPage==books[i].maxPages)
          {
           progress +="<li>You have read "+ books[i].title+"</li>"  
          }
          else
          {
            progress+="<li>You still need to read " + books[i].title+"</li>"         
          } 
        }
        return progress
      }
      document.getElementById("list2").innerHTML=checkPages()
      function fillTable()
      {
        let output="<tr><th>Title</th><th>Author</th><th>Max Pages</th><th>On Page</th><th>Progress</th></tr><br>"
        for (let i=0; i < books.length; i++)
        {
          output += "<tr><td>"+books[i].title+"</td>"+
                        "<td>" +books[i].author+"</td>"+
                        "<td>"+books[i].maxPages+"</td>"+
                        "<td>"+books[i].onPage+"</td>"
                        "<td>"+calculateProgress(books[i].onPage,books[i].maxPages)+"</td></tr>"
        }        
        return output
      }

      function calculateProgress(onPage,maxPages)
      {
        let calculateProgress=(onPage/maxPages)*100;
        return parseFloat(calculateProgress).toFixed(2) + "%"
      } 
      
      document.getElementById("tableBody").innerHTML=fillTable()


      function addBook() {
        let title=document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let maxPages = document.getElementById("maxPages").value;
        let onPage=document.getElementById("onPage").value;
        let progress=calculateProgress(onPage,maxPages)
        let table = document.getElementById("table"); 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);   
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);    
        var cell5 = row.insertCell(4); 
        cell1.innerHTML=title;
        cell2.innerHTML=author;
        cell3.innerHTML=maxPages;
        cell4.innerHTML=onPage;
        cell5.innerHTML=progress
      }

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 2;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}



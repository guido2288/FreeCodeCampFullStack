let books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813
  },
  {
    title: "The Catcher in the Rye",
    authorName: "J.D. Salinger",
    releaseYear: 1951
  }
];

function sortByYear( bookA, bookB ) {
    
    let value = bookA.releaseYear - bookB.releaseYear;

    if( value > 0 ) return 1;
    if( value < 0) return -1;
    if( value == 0) return 0;

}

let filteredBooks = books.filter(book => book.releaseYear >= 1800)
                        .sort(sortByYear(a, b));


console.log(filteredBooks)
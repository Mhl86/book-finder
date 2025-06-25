fetch(
  "https://www.googleapis.com/books/v1/volumes?q=book&startIndex=0&maxResults=40"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("website not working 404");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.items.forEach((book) => {
      const container = document.getElementById("booksCountiner");
      const title = document.createElement("h4");
      const img = document.createElement("img");
      title.textContent = book.volumeInfo.title;
      img.src = book.volumeInfo.imageLinks?.smallThumbnail;
      container.appendChild(title);
      container.appendChild(img);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

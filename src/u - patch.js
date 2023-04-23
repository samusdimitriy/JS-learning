const BASE_URL = "http://localhost:3000";

function updateBookById(update, bookId) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then((res) =>
    res.json()
  );
}

updateBookById({ title: "Большая новая книга по NODEJS" }, 8);

// updateBookById({ rating: 1 }, 18);

// updateBookById({ rating: 4, author: 'Манго' }, 17);

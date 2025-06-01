const connectAPI = async () => {
  const baseURL = "http://localhost:3000";
  fetch(baseURL)
    .then((response) => response.json())
    .then((data) => console.log(data));

};

export { connectAPI };

async function fetchChucknorrisJSON() {
  const url = `https://api.chucknorris.io/jokes/random`;
  const response = await axios.get(url);
  const chucknorris = response.data;

  const chucknorrisHtml = `
      <p><strong>${chucknorris.value}</strong></p>,
      <img src=${chucknorris.icon_url} />
      `;
  document.querySelector("#chucknorris").innerHTML = chucknorrisHtml


};



fetchChucknorrisJSON();
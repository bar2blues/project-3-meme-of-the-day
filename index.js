/*
 *Hacer un request de tipo GET al endpoint https://api.imgflip.com/get_memes, usando Fetch API.
 */
fetch("https://api.imgflip.com/get_memes", {
  method: "GET"
}).then(response => {
  response.status === 200
    ? console.log("Successful request!")
    : console.error(`Oops, we get an error ${response.status}`);
  return response;
});

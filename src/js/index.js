document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/fadibuni", {headers: {
    Authorization: `token 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`
  }})
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("profile-pic").src = data.avatar_url;
      document.getElementById("bio").textContent = data.bio;
    })
    .catch((error) => console.log("Error fetching GitHub data:", error));
});

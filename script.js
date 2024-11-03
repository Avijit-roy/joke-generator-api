const loadJokes = async () => {
  document.getElementById("joke").innerHTML = "Loading...";
  try {
    const myJokes = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });
    const jsonJokes = await myJokes.json();
    document.getElementById("joke").innerHTML = jsonJokes.value;
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("changeIt").addEventListener("click", loadJokes);

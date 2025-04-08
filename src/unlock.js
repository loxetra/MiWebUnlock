function startUnlock(login, password, xiaomi_url) {
  // ...
}

function handleError(error) {
  switch (error) {
    case "GadoError1":
      alert("It Error 1!")
    case "GadoError2":
      alert("It Error 2!")
    default:
      alert("Unkown Error, check logs!");
  }
  throw new Error("Error : ", error)
}

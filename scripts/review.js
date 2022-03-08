let hikeID = localStorage.getItem("hikeID");

db.collection("Hikes").where("code", "==", hikeID)
  .get()
  .then(queryHike => {
    //see how many results you have got from the query
    size = queryHike.size;
    // get the documents of query
    Hikes = queryHike.docs;

    // We want to have one document per hike, so if the the result of 
    //the query is more than one, we can check it right now and clean the DB if needed.
    if (size == 1) {
      var thisHike = Hikes[0].data();
      name = thisHike.name;
      document.getElementById("HikeName").innerHTML = name;
    } else {
      console.log("Query has more than one data")
    }
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

  
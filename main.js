window.onload = function () {
    const BASE = "https://covers.openlibrary.org/b/id/";
    let i = 0;
    let liburuak = [
        {
            isbn: "1617293563",
            egilea: "Raoul-Gabriel Urma",
            data: "Nov 15, 2018",
            izenburua: "Modern Java in Action: Lambdas, streams, functional and reactive programming",
            filename: "8508261-M.jpg"
        },
        {
            isbn: "9781617291302",
            egilea: "Benjamin Muschko",
            data: "Mar 09, 2014",
            izenburua: "Gradle in Action",
            filename: "8514400-M.jpg"
          },
        
             {
            isbn: "1883601126",
            egilea: "Matt Welsh",
            data: "1995",
            izenburua: "The Linux bible",
            filename: "6764181-M.jpg"
          },
          
        {
            isbn: "9781617293290",
            egilea: "Dmitry Jemerov",
            data: "Feb 19, 2017",
            izenburua: "Kotlin in Action",
            filename: "8507716-M.jpg"
          }
    ]

    document.getElementById("irudia").src = BASE + liburuak[0].filename;
    document.getElementById("izenburua").value = liburuak[0].izenburua;
    document.getElementById("egilea").value = liburuak[0].egilea;
    document.getElementById("data").value = liburuak[0].data;
    document.getElementById("isbn").value = liburuak[0].isbn;

    document.getElementById("aurreraBtn").addEventListener("click", function () {
        if (i < liburuak.length - 1){
            i++;
        }
      
        document.getElementById("irudia").src = BASE + liburuak[i].filename;
        document.getElementById("izenburua").value = liburuak[i].izenburua;
        document.getElementById("egilea").value = liburuak[i].egilea;
        document.getElementById("data").value = liburuak[i].data;
        document.getElementById("isbn").value = liburuak[i].isbn;
    });

    document.getElementById("atzeraBtn").addEventListener("click", function () {
        if (!i == 0){
            i--;
        }
     
        document.getElementById("irudia").src = BASE + liburuak[i].filename;
        document.getElementById("izenburua").value = liburuak[i].izenburua;
        document.getElementById("egilea").value = liburuak[i].egilea;
        document.getElementById("data").value = liburuak[i].data;
        document.getElementById("isbn").value = liburuak[i].isbn;
    });

}



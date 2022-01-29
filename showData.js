//1. Make Api call and grab data
//2. Append data

async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    return data;
  } catch (error) {
      console.log("Error from data retrieval");
  }
}

function appendData(data, location){
    data.forEach(({title, image}) => {
        let div = document.createElement("div");

        let p = document.createElement("p"); 
        p.innerText = title;

        let img = document.createElement("img");
        img.src = image;

        div.append(img, p);
    });
}

export {getData, appendData};
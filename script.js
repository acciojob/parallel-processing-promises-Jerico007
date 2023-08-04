//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


function downloadImages() {

 let promises = images.map((val)=>{
			
		   let prom = new Promise((resolve,reject)=>{
			   const img = new Image();
			   img.src = val.url;
			   img.alt = val.alt;
 			img.onload = ()=>{
				resolve(img);
			}

			img.onerror = ()=>{
				reject(`Failed to load image's URL: ${val.url}`)
			}
		});
	 return prom;
	});

	 let x = Promise.all(promises)
	x.then((data) =>{
		data.forEach((image) =>{
			output.appendChild(image);
		})
	})
	x.catch((data)=>
		{
			console.log(data);
		});

}


btn.addEventListener("click" , downloadImages);



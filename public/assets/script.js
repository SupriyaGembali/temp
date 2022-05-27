//Loading the uploaded image into constant imageUpload 

const imageUpload = document.getElementById('imageUpload')
document.getElementById("imageUpload").style.display="none";
document.getElementById("whiteBox").style.display="none";

/*
Ensuring Synchronous loading of different 
Models that we use in the project using Promise.all
*/

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('./assets/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./assets/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('./assets/models')
]).then(start)

//Emptying previous results
document.getElementById('myTable').innerHTML = '';

//displaying the uploaded image
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#imageResult')
              .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
}

$(function () {
  $('#upload').on('change', function () {
      readURL(input);
  });
});



/*  ==========================================
  SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById( 'imageUpload' );
var infoArea = document.getElementById( 'upload-label' );

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
var input = event.srcElement;
var fileName = input.files[0].name;
infoArea.textContent = 'File name: ' + fileName;
}



//Definition of start function

async function start() { 

  
  //Creating container to display the 
  //Canvas which holds Resultant Marked Image
  
  const div = document.getElementById('cont');
  div.textContent = 'Models are loading...Please Wait !!';
  const container = document.createElement('div')
  container.style.position = 'relative'
  document.body.append(container)

  //Function Call to Load the labled images

  const labeledFaceDescriptors = await loadLabeledImages()
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
  let image
  let canvas

 /*After Loading all our models and Labling images
   Message gets displayed on UI to upload image*/

  div.textContent = 'You can upload image now';
  
  /*Function EventListener for image Upload to specify the tasks
    That should be executed when image is uploaded*/
  
  {document.getElementById("imageUpload").style.display="block";
  document.getElementById("whiteBox").style.display="flex"
}

  imageUpload.addEventListener('change', async () => {
    
    //Removing the Previously uploaded images (if any)

    if (image) image.remove()
    if (canvas) canvas.remove()
    
    //Loading uploaded image into API usable format.
    
    image = await faceapi.bufferToImage(imageUpload.files[0])


    //Creating a canvas to display resultant 
    //marked image with rectangles around faces

    canvas = faceapi.createCanvasFromMedia(image)

    

    

    //Resizing the canvas according to image uploaded

    const displaySize = { width: image.width, height: image.height }
    faceapi.matchDimensions(canvas, displaySize)

    
    /*Finding all face detections from the uploaded photo by 
    the model by considering FAce Landmarks and Face 
    Descriptors*/
    

    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()

    //Resizing the Detections according to image Size

    const resizedDetections = faceapi.resizeResults(detections, displaySize)

    //Storing all detections in "Results"

    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))

      results.forEach((result, i) => {
     


     //storing name of detected person in variable name

      i=0
      var name='';
      while(result.toString()[i] != ' ')
      {
        console.log(result.toString()[i]);
        name = name.concat(result.toString()[i]);
        i++;
      }
  

      if (img) img.remove()
      if (table) table.remove()
      

      if (name != 'unknown')
      {
       
      var img = document.createElement("img");
      img.src = `./labeled_images/${name}/${1}.jpg`
      var src = document.getElementById("header");
     
      
      //to clear previous results(if any)
      document.getElementById('myTable').innerHTML = '';
      //inserting results into table
      var table = document.getElementById("myTable");
      var row = table.insertRow(0);
      var row1 = table.insertRow(1);
      var row2 = table.insertRow(2);


      var cell1 = row.insertCell(0);
      var cell2 = row1.insertCell(0);
      var cell3 = row2.insertCell(0);

      cell1.innerHTML = "Name : " +  name;
      cell2.innerHTML = "Crime History: " +  "YES";

      
      
    


      
      }
      else{

        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var row1 = table.insertRow(1);
        var row2 = table.insertRow(2);
  
  
        var cell1 = row.insertCell(0);
        var cell2 = row1.insertCell(0);
        var cell3 = row2.insertCell(0);
  
        cell1.innerHTML = "Face not found in our records" 
        cell2.innerHTML = "Crime History: " +  "NO";



      
      }
    })
  })
}

//Function to load the names of Detected Faces


function loadLabeledImages() {

  /*Loading Names of all the locally saved faces
  in labled_images folder into an array "lables"
  To add a new face , Enter the new person's 
  name in this array and His/her face in labled_images Folder*/
  const labels = ['Gopi', 'Hema', 'Pranay', 'Pujitha', 'Siddharth', 'Jashwanth', 'Kiran']

  //Label Images According to Their Names 

  return Promise.all(
    labels.map(async label => {

      //Create an array to store descriptions of all the faces in it.

      const descriptions = []

      for (let i = 1; i <= 2; i++) {

        //Finding descriptions of ith person from labels list.

        const img = await faceapi.fetchImage(`./assets/labeled_images/${label}/${i}.jpg`)
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

        //Pushing the descriptions into descriptions array.


        descriptions.push(detections.descriptor)
      }

      //returning all the label images' descriptions

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}

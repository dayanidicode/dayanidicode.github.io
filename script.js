
  function displayLength() {
    const textarea = document.getElementById('text');
    const length = document.getElementById('length');
    
	if(textarea.value.length <=4096)
	{
	length.innerHTML = `Maximum characters 4096 >= ${textarea.value.length} characters`;
	length.className="text-success";
	}
	else{
	length.innerHTML = `Maximum characters 4096 >= ${textarea.value.length} characters`;
	length.className="text-danger";
	}
  }
 /* 
 
 onkeydown="handleEnterKey(event)"
  function handleEnterKey(event) {
    // Check if the key pressed is the enter key
    if (event.key === 'Enter') {
      // Call your function here
      sendtext();
    }
  }
 */ 
 function sendtext() {
  const text = document.getElementById('text');
  console.log(typeof text.value);
  const id = document.getElementById('id');
  const result = document.getElementById('result1');
  if (!text.value) {
    alert('text not found');
    return;
  }
  // Encode the string using encodeURIComponent()
  const encodedText = encodeURIComponent(text.value);
  fetch('https://api.telegram.org/bot5584328065:AAHIM8QNc8cU_0ktfj8li9V6TfPXc6xeEt8/sendMessage?chat_id='+id.value+'&text='+encodedText)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.ok == true) {
        text.value="";
        result.className="text-success";
        result.innerHTML='Text send Successfully...';
        console.log(data);
      } else {
        result.innerHTML=data.description;
        result.className="text-danger";
      }
    })
}

function sendphoto() {
  // Get the file input element and the progress bar element
  const fileInput = document.getElementById('fileInput');
  //const progressBar = document.getElementById('progressBar1');
  const id = document.getElementById('id');
  const result = document.getElementById('result2');
  
  // Check if any files have been selected
  if (!fileInput.files || !fileInput.files.length) {
    alert('Please select one or more files');
    return;
  }
  // Create a new FormData object
  const formData = new FormData();
  // Loop through the selected files
  for (let i = 0; i < fileInput.files.length; i++) {
    // Add each file to the FormData object
    formData.append('photo', fileInput.files[i]);
	fetch('https://api.telegram.org/bot5584328065:AAHIM8QNc8cU_0ktfj8li9V6TfPXc6xeEt8/sendPhoto?chat_id='+id.value+'&caption=', {
    method: 'POST',
    body: formData,
    
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
	  if(data.ok == false)
	  {
	  result.innerHTML=data.description;
	  result.className="text-danger";
	  }
	  else{
	  result.className="text-success";
	  result.innerHTML='Photos '+(i+1)+' Upload successfully';
	  }
    })
	formData.delete('photo');
  }
  fileInput.value = "";
}

function sendvideo() {
	// Get the file input element
const fileInput = document.getElementById('videofileInput');
//const progressBar = document.getElementById('progressBar2');
const id = document.getElementById('id');
const result = document.getElementById('result3');
// Check if any files have been selected
if (!fileInput.files || !fileInput.files.length) {
  alert('Please select a file');
  return;
}
// Create a new FormData object
const formData = new FormData();
// Add the video file to the FormData object
  for (let i = 0; i < fileInput.files.length; i++) {
formData.append('video', fileInput.files[i]);
// Send the video to the server using a POST request
fetch('https://api.telegram.org/bot5584328065:AAHIM8QNc8cU_0ktfj8li9V6TfPXc6xeEt8/sendVideo?chat_id='+id.value+'&caption=', {
  method: 'POST',
  body: formData,
   
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
	if(data.ok == false)
	{
	result.innerHTML=data.description;
	  result.className="text-danger";
	}
	else{
	result.className="text-success";
	  result.innerHTML='Video '+(i+1)+'successfully Uploaded';
	}
  });

  formData.delete('video');
  
}

fileInput.value = "";
}

 function senddoc() {
  // Get the file input element
  const fileInput = document.getElementById('docfileInput');
  const id = document.getElementById('id');
  const result = document.getElementById('result4');
  // Check if any files have been selected
  if (!fileInput.files || !fileInput.files.length) {
    alert('Please select one or more files');
    return;
  }
  // Create a new FormData object
  const formData = new FormData();
  // Loop through the selected files
  for (let i = 0; i < fileInput.files.length; i++) {
    // Add each file to the FormData object
    formData.append('document', fileInput.files[i]);
	fetch('https://api.telegram.org/bot5584328065:AAHIM8QNc8cU_0ktfj8li9V6TfPXc6xeEt8/sendDocument?chat_id='+id.value+'&caption=', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
	  if(data.ok == false)
	  {
	  result.innerHTML=data.description;
	  result.className="text-danger";
	  }
	  else{
	  result.className="text-success";
	  result.innerHTML='Document'+(i+1)+' successfully submitted';
	  }
    })
	formData.delete('document');
  }
fileInput.value = "";
}
  

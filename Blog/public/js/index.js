console.log("Jquery index.js working");
$(document).on("click", function(){
    console.log("Blog clicked");
})

fetch('/delete', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
        // Add any other headers if needed
    },
    // Add body if needed
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data); // Handle the response
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

// function createRecord() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;

//     // Make an AJAX request to the server for creating a record
//     // Update the URL with your server endpoint
//     // Use fetch or XMLHttpRequest as per your preference
//     fetch('create.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email),
//     })
//     .then(response => response.text())
//     .then(result => {
//         document.getElementById('result').innerHTML = result;
//     });
// }

// function readRecords() {
//     // Make an AJAX request to the server for reading records
//     // Update the URL with your server endpoint
//     fetch('read.php')
//     .then(response => response.text())
//     .then(result => {
//         document.getElementById('result').innerHTML = result;
//     });
// }

// function updateRecord() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;

//     // Make an AJAX request to the server for updating a record
//     // Update the URL with your server endpoint
//     fetch('update.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email),
//     })
//     .then(response => response.text())
//     .then(result => {
//         document.getElementById('result').innerHTML = result;
//     });
// }

// function deleteRecord() {
//     // Make an AJAX request to the server for deleting a record
//     // Update the URL with your server endpoint
//     fetch('delete.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: '', // You might need to pass an ID for deletion
//     })
//     .then(response => response.text())
//     .then(result => {
//         document.getElementById('result').innerHTML = result;
//     });
// }

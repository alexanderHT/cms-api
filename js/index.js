/* main function */
$( document ).ready(function() {
  $('#updateButton').hide()
  $.ajax({
    url:  "http://localhost:3000/api/data",
    method: 'get',
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      console.log(data)
      var dataHTML
      for(var i = 0; i < data.length; i++){
        dataHTML += `<tr id="data${data[i]._id}">
        <td class="id-data">${data[i]._id}</td>
        <td class="date-data">${data[i].date}</td>
        <td class="frequency-data">${data[i].frequency}</td>
        <td><button id="edit${data[i]._id}" type="button" class="btn btn-warning" onclick="passingDataToInput('${data[i]._id}')">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteData( '${data[i]._id}' )">Delete</button></td>
        </tr>`
      }
      $('#list-data-data"').append(dataHTML)
    }
  })
}) // main function, the main function is always start when browser open

/* insert function */
function insertData(){
  $.ajax({
    url:  "http://localhost:3000/api/data",
    method: 'post',
    data : {
      date_input : $('#form-data #date_input').val(),
      frequency_input : $('#form-data #frequency_input').val()
      // id_input : $('#form-data #id_input').val()
    },
    contentType: 'application/x-www-form-urlencoded',
    success: function(data) {
      console.log(data)
      var dataHTML
        dataHTML += `<tr id="data${data_.id}">
        <td class="id-data">${data._id}</td>
        <td class="date-data">${data.date}</td>
        <td class="frequency-data">${data.frequency}</td>
        <td><button id="edit${data._id}" type="button" class="btn btn-warning" onclick="passingDataToInput('${data._id}')">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick=" deleteData( '${data._id}' )" >Delete</button></td>
        </tr>`
      $('#list-data-data"').append(dataHTML)
    }
  })
} // insert function

$(document).ready( function(){
$.ajax({
    type: "GET",
    dataType: "json",
    url: ("http://localhost:3000/Data"),
    data: {get_param:'value'},
    success: function (data,textstatus,xhr) {
        console.log(data);
        var trHTML = ""
        $.each(data, function (i,item) {
        var Department1=JSON.parse(item.Department)

       trHTML+=`<tr>
       <td><img style="height:20px; width:20px ;border:2px solid white" src="${item.profileImage}" alt=""> <span>${item.Name}</span>
        </td>
       <td> ${item.Gender}</td>
       <td > ${Department1}</td>
       <td> ${item.Salary}</td>
       <td> ${item.startDate}</td>
       <td>
         <i class="fa-solid fa-trash-can" onclick="Delete(${item.id})"></i> </button>
       <button class="UpdateButton" type="button" onclick="upadte(${item.id})"> <i class="fa-sharp fa-solid fa-pen"></i> </button>

       </td>
    
       </tr>`
        console.log(Department1)
        });
        $('.Tbody').append(trHTML);
        alert("Data Get Sucessfully")
    console.log(data);

    },
    Error: function (xhr,textstatus,errorTrown) {
        alert("Posting in error")
    }
})
});

function Delete(id){
console.log(id,"bfhfcfdcfcgc")
 $.ajax({
    type: "DELETE",
    dataType: "json",
    url: `http://localhost:3000/Data/${id}`,  
    success: function (data,textstatus,xhr) {
        console.log(data);
        alert("Data Delete sucessfully")
    },

    Error: function (xhr,textstatus,errorTrown) {
        alert("Data not Deleted")
    }    
 })
 }
function upadte(id){
    localStorage.setItem("id",id)
    window.location.href="./update.html"
}
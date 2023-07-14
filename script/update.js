$(document).ready(function () {
    getdata()
})
const empid = localStorage.getItem("id")
function getdata() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: ("http://localhost:3000/Data/"+empid),
       
        success: function (data, textstatus, xhr) {
            console.log(data);
            $('.nameinput').val(data.Name);
            $('#Salary').val(data.Salary);
            $('.noteinput').val(data.Notes);
            $('input[name=profileimage][value="' + data.profileImage + '"]').prop('checked', true);
            $('input[name=Gender][value="' + data.Gender + '"]').prop('checked', true);
            $('input[name=Department]').each(function () {
                let deptValue = $(this).val();
                $(this).prop("checked", data.Department.includes(deptValue));
            })
            let startdate = (data.startDate).split("/");
            $("#date").val(startdate[0]);
            $(".month").val(startdate[1]);
            $(".Year").val(startdate[2]);

        }
    })
}

function update() {
    const Name = $('.nameinput').val()
    const Department = [];
    const profileImage = $("input[name=profileimage]:checked").val()
    const Gender = $("input[name=Gender]:checked").val()
    $("input[name=Department]:checked").each(
        function () {
            Department.push($(this).val())
        }
    ) 
  
    const Salary = $("#Salary").val()
    const Date = $("#date").val()
    const Month = $(".month").val()
    const Year = $(".Year").val()
    const Notes = $(".noteinput").val()
    let reqdata = {
        Name: Name,
        profileImage: profileImage,
        Gender: Gender,
        Department: JSON.stringify(Department),
        Salary: Salary,
        startDate: Date + "/" + Month + "/" + Year,
        Notes: Notes
    }
    console.log(empid)
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: `http://localhost:3000/Data/${empid}`,
        data:reqdata,

        success: function (data, textstatus, xhr) {
            console.log(data);
            alert("Data Updated sucessfully")
        },

        Error: function (xhr, textstatus, errorTrown) {
            alert("Data not Updated")
        }
    })
}

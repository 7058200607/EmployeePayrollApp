function Onsubmmit(){
   // console.log("save data");
const Name=$('.nameinput').val()
const Department=[];
const profileImage=$("input[name=profileimage]:checked").val()
const Gender=$("input[name=Gender]:checked").val()
 $("input[name=Department]:checked").each(
    function(){
        Department.push($(this).val())
    }
)
const Salary=$("#Salary").val()
const Date=$("#date").val()
const Month=$(".month").val()
const Year=$(".Year").val()
const Notes=$(".noteinput").val()

let reqdata={
        Name:Name,
        profileImage:profileImage,
        Gender:Gender,
        Department:JSON.stringify(Department),
        Salary:Salary,
       startDate:Date+"/"+ Month +"/"+Year,
        Notes:Notes
    }
$.ajax({ 
    type:"POST",
    url:" http://localhost:3000/Data",
    data:reqdata,
    success:function(){
        alert("Data Post Sucessfully")
    },
    Error:function(){
        alert("Posting in error")
    }

})
    console.log(reqdata);
}


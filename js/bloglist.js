// var modal = document.getElementById("trash_modal");
// // Get the button that opens the modal
// var trash1 = document.getElementById("trash_1");
// trash1.onclick = function() {
//     modal.style.display = "block";
//   }
function delete_post(obj){
    var modal = document.getElementById("trash_modal");
    modal.style.display="block";
    
    var yes=document.getElementById("yes");
    var no=document.getElementById("no");
    yes.onclick=function(){
        obj.parentElement.parentElement.style.display="none";
        modal.style.display = "none";
    }
    no.onclick=function(){
        modal.style.display = "none";
    }
}
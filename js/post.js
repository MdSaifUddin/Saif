var edit_save=document.getElementById("edit_save");
var blogBody=document.getElementById("blogBody");
edit_save.onclick=function(){
    if(edit_save.innerHTML=="Edit"){
    edit_save.innerHTML="Save";
    blogBody.innerHTML="<textarea "+"id="+"text_area"+">"+blogBody.innerHTML+"</textarea>";
    }else{
        edit_save.innerHTML="Edit";
        blogBody.innerHTML=document.getElementById("text_area").value;
    }
}

//Like button
var like=document.getElementById("like");
var person_count=document.getElementById("person_count");
like.onclick=function(){
    like.innerHTML="Liked!";
    document.getElementById("first_person").style.display="none";
    if(person_count.innerHTML==""){
        person_count.innerHTML="1 person likes this!";
    }
    else{
        var n=parseInt(person_count.innerHTML);
        person_count.innerHTML=(n+1)+" person likes this!";
    }
}
username=document.getElementById('username');
useremail=document.getElementById('useremail');
usermassage=document.getElementById('usermassage');
usernumber=document.getElementById('usernumber');
send=document.getElementById('sendbtn');
let z

if(localStorage.iteam!=null){
    usersinfo=JSON.parse(localStorage.iteam)
    
}
else{
    
    usersinfo=[];
    
   
}


send.addEventListener('click',function create(){

var users=
{
name:username.value,
email:useremail.value,
massage:usermassage.value,
number:usernumber.value
}
if(useremail.value!=''){

    if(send.textContent === "Send"){

        usersinfo.push(users);
    
    }
    else{
        usersinfo[z]=users
        send.textContent = "Send";
    
    
    }
}



showdata()
clearData()

localStorage.setItem('iteam',  JSON.stringify(usersinfo))
})

function showdata(){
    var con='';
for(i=0;i<usersinfo.length;i++){

con+=`
    <tr>
                <td >${usersinfo[i].email}</td>
                <td>${usersinfo[i].name}</td>
                <td>${usersinfo[i].massage}</td>
                <td>${usersinfo[i].number}</td>
                <td> <button onclick='delteBut(${i})'  class="btn btn-danger mb-2">Delete</button></td>
                <td> <button onclick='updateData(${i})'  class="btn btn-success mb-2">Update</button></td>


     </tr>
`
}

document.getElementById('tbody').innerHTML=con

if(usersinfo.length>0){
    del=`<button onclick=" deleteAll()"   class="btn btn-dark mb-2 " style="width: 100px; margin-top: 20px; float: right; margin-right:220px;">Delete All</button>`
      
    document.getElementById('delall').innerHTML=del
}

else{
    document.getElementById('delall').innerHTML='' 
}


}

function clearData(){
    username.value=''
    useremail.value=''
    usermassage.value=''
    usernumber.value=''

}

function delteBut(i){
 usersinfo.splice(i,1)
 localStorage.iteam=JSON.stringify(usersinfo)
 showdata()
}
function updateData(i){
    username.value=usersinfo[i].name
    useremail.value=usersinfo[i].email
    usermassage.value=usersinfo[i].massage
    usernumber.value=usersinfo[i].number
    send.textContent = "Update";
  z=i

}


showdata()
function deleteAll(){
    localStorage.clear()
    usersinfo.splice(0)
    showdata()


}
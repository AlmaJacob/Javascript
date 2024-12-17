let data =[{id:'1',name:'alma',age:21,email:'alma@gmail.com',phone:'582013805',place:'ksrgd'},{id:'2',name:'devan',age:21,email:'devan@gmail.com',phone:'58687949385',place:'wayanad'},{id:'3',name:'ashi',age:21,email:'ashi@gmail.com',phone:'68567456345',place:'ksrgd'}]

function Display(){
    let tbody=document.querySelector('tbody')
    tbody.innerHTML=""
    data.forEach((user)=>{
        let tr=document.createElement('tr')

        let id_td=document.createElement('td')
        id_td.innerHTML=user.id
        tr.appendChild(id_td)

        let name_td=document.createElement('td')
        name_td.innerHTML=user.name
        tr.appendChild(name_td)

        let age_td=document.createElement('td')
        age_td.innerHTML=user.age
        tr.appendChild(age_td)

        let email_td=document.createElement('td')
        email_td.innerHTML=user.email
        tr.appendChild(email_td)

        let phone_td=document.createElement('td')
        phone_td.innerHTML=user.phone
        tr.appendChild(phone_td)

        let place_td=document.createElement('td')
        place_td.innerHTML=user.place
        tr.appendChild(place_td)

        // -----------------------------------------------

    let edit_td=document.createElement('td')
        let edit_btn=document.createElement('button')
        edit_btn.innerHTML='edit'

        edit_btn.onclick=function(){        
            edit_form(user.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

// .---------------------------------------------

let delete_td=document.createElement('td')
        let del_btn=document.createElement('button')
        del_btn.innerHTML='delete'

        del_btn.onclick=function(){
            delete_data(user.id)
        }
        delete_td.appendChild(del_btn)
        tr.appendChild(delete_td)



        tbody.appendChild(tr)
    })
}

function delete_data(id){
    data=data.filter((user)=>user.id!=id)
    Display()
}



// -------------------edit-------------------------------------

function edit_form(id){
    document.getElementById('edit_form').style.display='block'
    document.getElementById('add_form').style.display='none'
    let edit=data.find((user)=>user.id==id)
    document.getElementById('e_id').value=edit.id
    document.getElementById('e_name').value=edit.name
    document.getElementById('e_age').value=edit.age
    document.getElementById('e_email').value=edit.email
    document.getElementById('e_phone').value=edit.phone
    document.getElementById('e_place').value=edit.place
    edit_data=id
}

document.getElementById('edit_form').addEventListener('submit',function(event){
    event.preventDefault()
    let id=document.getElementById('e_id').value
    let name=document.getElementById('e_name').value
    let age=document.getElementById('e_age').value
    let email=document.getElementById('e_email').value
    let phone=document.getElementById('e_phone').value
    let place=document.getElementById('e_place').value
    data=data.map((user)=>{
        if(user.id==edit_data){
            return {...user,id:id,name:name,age:age,email:email,phone:phone,place:place}
        }
        return user
    })
    document.getElementById('edit_form').style.display='none'
    document.getElementById('add_form').style.display='block'
    Display()
})




// -------------------------add------------------

document.getElementById('add_form').addEventListener('submit',function(event){
    event.preventDefault()
    let id=document.getElementById('id').value
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value
    let place=document.getElementById('place').value
    data.push({id:id,name:name,age:age,email:email,phone:phone,place:place})

    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('email').value=''
    document.getElementById('phone').value=''
    document.getElementById('place').value=''
    Display()
})

Display()

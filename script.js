var adminTable = document.getElementById('adminTable')
var updateId = document.getElementById('updateId')
var updateimageUrl = document.getElementById('updateimageUrl')
var updatefoodName = document.getElementById('updatefoodName')
var updateCatrgory = document.getElementById('updateCatrgory')
var updateprice = document.getElementById('updateprice')
var updatedescription = document.getElementById('updatedescription')
var deleteform = document.getElementById('deleteform')
var delid = document.getElementById('delid')
var deleteText = document.getElementById('deleteText')
var tableSection = document.getElementById('tableSection')
var addForm = document.getElementById('addForm')


tableSection.style.display="block"
addForm.style.display="none"

function tableOpen(){
    addForm.style.display="none"
   tableSection.style.display="block"
}
function adfOpen(){
     addForm.style.display="block"
     tableSection.style.display="none"
}


fetch('https://restaurentbackend-qste.onrender.com/get')
    .then((res) => res.json())
    .then((a) => {
        a.map((a) => {
            adminTable.innerHTML += `<tr class="">
                    <td >${a.foodId}</td>
                     <td><img height="100px" width="100px"  src="${a.imageUrl}" alt=""></td>
                    <td>${a.foodName}</td>
                    <td style="width: 100px !important; ">${a.price} /-</td>
                    <td   style="" class="description">${a.description}</td>
                    <td>${a.category}</td>
                    <td  style="width: 200px !important;"><button class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"  onclick="updateDetail(${a.foodId}, '${a.imageUrl}', '${a.foodName}', ${a.price}, '${a.category}', '${a.description}')">update</button>
                            <button onclick="del('${a.foodName}', ${a.foodId})" class="btn btn-danger ms-2" data-bs-toggle="modal"  data-bs-target="#exampleModal2"  onclick="submit()">Delete</button></td>
                </tr>`
                console.log(a.imageUrl);
                
        })
    })

    // console.log(a.foodId);
    
function updateDetail(id, image, name, price, category, description) {
    updateId.value = id;
    updateimageUrl.value = image;
    updatefoodName.value = name;
    updateprice.value = price;
    updateCatrgory.value = category;
    updatedescription.value = description;
}
function submit() {
    confirm('hi')
}


function del(foodName, foodId){
    
    delid.value=foodId
    deleteText.innerText = "Delete your food "+foodName +" 😢"
    // delid.value = foodId
    // console.log(delid.value);
    

    // deleteform.innerHTML = `<p>this is ${foodName}</p>`
                        // <div class=" col-12 d-flex justify-content-center">
                        //      <button type="submit" onclick="submit()" class="btn submit" name="" id="">Delete</button>
                        // </div>`
    
}




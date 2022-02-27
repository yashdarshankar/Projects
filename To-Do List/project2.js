function getAnupdate(){
    til = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    
    if(localStorage.getItem('itemJson') == null){
      itemJsonArray =[];
      itemJsonArray.push([til,desc]);
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
    }
    else{
      itemJsonArrayStr = localStorage.getItem('itemJson');
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([til,desc]);
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
      }
    update();
  }
  function update(){
    if(localStorage.getItem('itemJson') == null){
      itemJsonArray =[];
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
    }
    else{
      itemJsonArrayStr = localStorage.getItem('itemJson');
      itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
      //populate table
    let tablebody = document.getElementById("tablebody");
    let str = ""
    itemJsonArray.forEach((element, index) => {
      str += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button  class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
      </tr>`; 
      /*str += `
      <td>
      ${element[1]}
      </td>`; */
        
    });
      tablebody.innerHTML = str;
  }
  //add = document.getElementById("add");
  //add.addEventListener("click",getAnupdate);
  update();
  function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    update();
  }
  function clearStorage(){
    if (confirm("Do you really want to clear")){
    console.log("clearing");
    localStorage.clear();
    update();}
  }
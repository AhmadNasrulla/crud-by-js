let textInput = document.getElementById("textInput");
let AddButton = document.getElementById("addButton");
let list = document.getElementById("list");
let listContainer = document.getElementById("listContainer");

AddButton.addEventListener("click",add_t0_list);

function add_t0_list()
{
    if(textInput.value.trim() !== "")
    {
        console.log(textInput.value);
        var compList = document.createElement("li");
        var text = document.createElement("span");
        text.textContent = textInput.value;
        var edit = document.createElement("button");
        edit.addEventListener("click",function(){
            editFunction(compList);
        });
        var del = document.createElement("button");
        del.addEventListener("click",function(){
            delFunction(compList);
        });
        edit.textContent = "Edit";
        del.textContent = "Delete";
        compList.appendChild(text);
        compList.appendChild(edit);
        compList.appendChild(del);
        list.appendChild(compList);

        textInput.value = "";
    }
}

function editFunction(Itemlist)
{
    var newtext = prompt("Edit text:",Itemlist.firstChild.textContent);
    if(newtext.trim() != "")
    {
        Itemlist.firstChild.textContent=newtext;
    }  
}

function delFunction(itemList) {
    itemList.parentNode.removeChild(itemList);
}
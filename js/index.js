var inputSiteName = document.getElementById("setName");
var inputSiteUrl = document.getElementById("setUrl");
var inputSubmit = document.getElementById("Submit");
var inputContainer = [];
if (localStorage.getItem("book") != null) {
    inputContainer = JSON.parse(localStorage.getItem("book"));
    disPlay();

}
function addBook() {
    if (validationForme(inputSiteName) &&
        validationForme(inputSiteUrl)) {
        var Books =
        {
            Name: inputSiteName.value,
            url: inputSiteUrl.value,
        }
        inputContainer.push(Books);
        localStorage.setItem("book", JSON.stringify(inputContainer));
        console.log(inputContainer);
        clearForme();
        disPlay();

    }



}
function clearForme() {
    inputSiteName.value = null;
    inputSiteUrl.value = null;

}
function disPlay() {

    var cartona = "";
    for (var i = 0; i < inputContainer.length; i++) {
        cartona += ` <tr>
                    <td>
                        ${i + 1}
                    </td>
                    <td>
                        ${inputContainer[i].Name}
                    </td>
                    <td>
                        <button class="btn visit">
                            <i class="fa-solid fa-eye ">
                           <a
                              href="${inputContainer[i].url}"
                              target="_blank"
                              class="text-decoration-none "
                              
                            >
                            </i>
                            Viisit
                        </button>
                    </td>
                    <td>
                        <button  onclick=" deleteInput(${i})" class="btn dalete">
                            <i class="fa-solid fa-trash-can "></i>
                            Delete
                        </button>
                    </td>
                </tr>`

    }
    document.getElementById("data").innerHTML = cartona;

}
function deleteInput(index) {
    inputContainer.splice(index, 1);
    localStorage.setItem("book", JSON.stringify(inputContainer));
    disPlay();

}
function validationForme(ele) {
    var regex =
    {
        setName: /^[a-z]{3,8}$/,
        setUrl: /^http:\/\/g/
    }
    if (regex[ele.id].test(ele.value)) {
        ele.classList.add('is-valid');
        return true;

    }
    else {
        ele.classList.remove('is-invalid')
        return false;
    }

}
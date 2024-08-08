var buttonCriar = document.getElementById("criar-tarefa")


buttonCriar.addEventListener("click", () => {
    if(document.getElementById("nameTarefa").value != ""){
        var divP = document.getElementById("listas")

        var divC = document.createElement("div")
        divC.className = "listaC"

        var div = document.createElement("div")
        div.className = "lista"

        var h1 = document.createElement("h1")
        h1.innerHTML = document.getElementById("nameTarefa").value

        var input = document.createElement("input")
        input.type = "checkbox"

        input.addEventListener('change', function() {
            if (this.checked) {
                h1.classList.add('riscar');
            } else {
                h1.classList.remove('riscar');
            }
        });

        div.appendChild(h1)
        div.appendChild(input)

        divC.appendChild(div)
        divP.appendChild(divC)

        document.getElementById("nameTarefa").value = ""
    }
})


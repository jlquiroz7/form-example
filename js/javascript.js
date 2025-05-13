// Días por mes
const diasPorMes = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const anioMaximo = new Date().getFullYear();
const anioMinimo = anioMaximo - 120;

document.addEventListener("DOMContentLoaded", (event) => {
    const jsDom = document.getElementById("js-dom");
    jsDom.classList.add("w3-content");
    jsDom.style.maxWidth = "1200px";
    jsDom.style.paddingTop = "100px";
    
    // Encabezado
    renderHeader(jsDom);

    // Contenedor de Formulario
    renderFormContainer(jsDom);
})

function renderHeader(jsDom) {
    const divHeader = document.createElement("div");
    divHeader.classList.add("w3-opacity");
    
    const header = document.createElement("header");
    header.classList.add("w3-center");
    header.classList.add("w3-margin-bottom");

    const h1 = document.createElement("h1");
    h1.textContent = "Formulario";
    
    header.appendChild(h1);
    divHeader.appendChild(header);
    
    jsDom.appendChild(divHeader);
}

function renderFormContainer(jsDom) {
    const divFormContainer = document.createElement("div");
    divFormContainer.classList.add("w3-container");
    divFormContainer.classList.add("w3-padding-32");

    const form = document.createElement("form");
    form.id = "js-formulario";
    form.action = "/action_page.php";
    form.method = "post";

    const labelNombre = document.createElement("label");
    labelNombre.htmlFor = "nombre";
    labelNombre.textContent = "Nombre completo";

    const inputNombre = document.createElement("input");
    inputNombre.classList.add("w3-input");
    inputNombre.classList.add("w3-border");
    inputNombre.type = "text";
    inputNombre.id = "js-nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;

    const labelFechaNacimiento = document.createElement("label");
    labelFechaNacimiento.htmlFor = "fecha_nacimiento";
    labelFechaNacimiento.textContent = "Fecha de nacimiento";

    const divFechaNacimiento = document.createElement("div");
    divFechaNacimiento.classList.add("select-row");
    
    renderSelectDia(divFechaNacimiento, 1);

    renderSelectMes(divFechaNacimiento);

    renderSelectAnio(divFechaNacimiento);

    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email";
    labelEmail.textContent = "Correo electrónico";

    const inputEmail = document.createElement("input");
    inputEmail.classList.add("w3-input");
    inputEmail.classList.add("w3-border");
    inputEmail.type = "email";
    inputEmail.id = "js-email";
    inputEmail.name = "email";
    inputEmail.required = true;

    const labelCiudad = document.createElement("label");
    labelCiudad.htmlFor = "ciudad";
    labelCiudad.textContent = "Ciudad de nacimiento";

    const inputCiudad = document.createElement("input");
    inputCiudad.classList.add("w3-input");
    inputCiudad.classList.add("w3-border");
    inputCiudad.type = "text";
    inputCiudad.id = "js-ciudad";
    inputCiudad.name = "ciudad";
    inputCiudad.required = true;

    const labelMotivo = document.createElement("label");
    labelMotivo.htmlFor = "motivo";
    labelMotivo.textContent = "¿Por qué quieres suscribirte?";

    const textareaMotivo = document.createElement("textarea");
    textareaMotivo.classList.add("w3-input");
    textareaMotivo.classList.add("w3-border");
    textareaMotivo.id = "js-motivo";
    textareaMotivo.name = "motivo";
    textareaMotivo.rows = 4;
    textareaMotivo.required = true;

    const buttonEnviar = document.createElement("button");
    buttonEnviar.id = "js-enviar";
    buttonEnviar.classList.add("w3-button");
    buttonEnviar.classList.add("w3-black");
    buttonEnviar.classList.add("w3-margin-top");
    buttonEnviar.type = "submit";
    buttonEnviar.textContent = "Enviar";

    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelFechaNacimiento);
    form.appendChild(divFechaNacimiento);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelCiudad);
    form.appendChild(inputCiudad);
    form.appendChild(labelMotivo);
    form.appendChild(textareaMotivo);
    form.appendChild(buttonEnviar);

    divFormContainer.appendChild(form);
    jsDom.appendChild(divFormContainer);
}

function renderSelectDia(divFechaNacimiento, selectedMes) {    
    const selectDia = document.createElement("select");
    selectDia.classList.add("w3-select");
    selectDia.classList.add("w3-border");
    selectDia.id = "js-dia";
    selectDia.name = "dia";
    selectDia.required = true;

    renderDiaOptions(selectDia, selectedMes);

    const divDia = document.createElement("div");
    divDia.classList.add("date-select");
    
    divDia.appendChild(selectDia);
    divFechaNacimiento.appendChild(divDia);
}

function renderDiaOptions(selectDia, selectedMes) {
    selectDia.innerHTML = "";
    for (let i = 1; i <= diasPorMes[selectedMes]; i++) {
        const optionDia = document.createElement("option");
        optionDia.value = i;
        optionDia.textContent = i;
        selectDia.appendChild(optionDia);
    }
}

function renderSelectMes(divFechaNacimiento) {
    const selectMes = document.createElement("select");
    selectMes.classList.add("w3-select");
    selectMes.classList.add("w3-border");
    selectMes.id = "js-mes";
    selectMes.name = "mes";
    selectMes.required = true;
    selectMes.addEventListener("change", () => {
        const selectDia = document.getElementById("js-dia");
        renderDiaOptions(selectDia, selectMes.value);
    });

    selectMes.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
        const optionMes = document.createElement("option");
        optionMes.value = i;
        optionMes.textContent = i;
        selectMes.appendChild(optionMes);
    }

    const divMes = document.createElement("div");
    divMes.classList.add("date-select");
    
    divMes.appendChild(selectMes);
    divFechaNacimiento.appendChild(divMes); 
}

function renderSelectAnio(divFechaNacimiento) {
    const selectAnio = document.createElement("select");
    selectAnio.classList.add("w3-select");
    selectAnio.classList.add("w3-border");
    selectAnio.id = "js-anio";
    selectAnio.name = "anio";
    selectAnio.required = true;

    selectAnio.innerHTML = "";
    for (let i = anioMaximo; i >= anioMinimo; i--) {
        const optionAnio = document.createElement("option");
        optionAnio.value = i;
        optionAnio.textContent = i;
        selectAnio.appendChild(optionAnio);
    }

    const divAnio = document.createElement("div");
    divAnio.classList.add("date-select");
    
    divAnio.appendChild(selectAnio);
    divFechaNacimiento.appendChild(divAnio);
}
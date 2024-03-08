
const isNullOrEmpty = (value) => {
	if (value === null || value === "" || value === "null" || value === undefined)
        return true
	else
        return false
};

const isValidJson = (json) => {
    try {
        JSON.parse(json);
        return true;
    } catch (error) {
        return false
    }
};

//com R$
const formatDollarSign = (value, local, currency) => {
    if (isNullOrEmpty(local) || isNullOrEmpty(currency))
        return 0;

    value = value.toLocaleString(local, {style: 'currency', currency: currency});

    return value;
}

//sem R$
const formatNotDollarSign = (value, local) => {
    if (isNullOrEmpty(local))
        return 0;

    value = value.toLocaleString(local, {minimumFractionDigits: 2});

    return value;
}

const  formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const isLogged = (value) => {
    // const nav = useNavigate();
    // const dispatch = useDispatch();

    if ((value !== true) || isNullOrEmpty(value)) {
        localStorage.clear();
        window.location.href = "/";
        // nav("/");
    }
}

const cpfMask = (value) => {
    let newValue = value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    return newValue;
}

const cnpjMask = (value) => {
    let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    return value;
}

const removeMaskNationalIdentifier = (value) => {
    let teste = value.replaceAll('.', '').replace('-', '').replace('/', '');
    console.log(teste);
    return teste;
}

module.exports = {
	isNullOrEmpty,
    isValidJson,
    formatDollarSign,
    formatNotDollarSign,
    formatDate,
    isLogged,
    cpfMask,
    cnpjMask,
    removeMaskNationalIdentifier
}

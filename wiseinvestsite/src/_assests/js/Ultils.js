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

const formatDate = (value) => {
    let formattedDate;
    value = new Date(value);

    formattedDate = ((value.getDate() )) + "/" + ((value.getMonth() + 1)) + "/" + value.getFullYear();
    return formattedDate;
}

module.exports = {
	isNullOrEmpty,
    isValidJson,
    formatDollarSign,
    formatNotDollarSign,
    formatDate
}

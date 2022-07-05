function mask(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmask()", 1)
}

function execmask() {
    v_obj.value = v_fun(v_obj.value)
}

function masktel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

function maskcpf(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

function maskcnpj(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}

function maskcep(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
    return v;
}

function idcss(el) {
    return document.getElementById(el);
}

window.onload = function () {

    idcss('CPF').setAttribute('maxlength', 14);
    idcss('CPF').onkeypress = function () {
        mask(this, maskcpf);
    }

    idcss('Telefone').setAttribute('maxlength', 15);
    idcss('Telefone').onkeypress = function () {
        mask(this, masktel);
    }

    idcss('CEP').setAttribute('maxlength', 9);
    idcss('CEP').onkeypress = function () {
        mask(this, maskcep);
    }

    idcss('CPFBeneficiario').setAttribute('maxlength', 14);
    idcss('CPFBeneficiario').onkeypress = function () {
        mask(this, maskcpf);
    }
}
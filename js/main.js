function consultaCep() {

    const cep = document.getElementById('CEP').value;
    const url = 'https://viacep.com.br/ws/' + cep + '/json/'

    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            console.log(data);

            $("#bairro").html(data.bairro);
            $("#cep").html(data.cep);
            $("#complemento").html(data.complemento);
            $("#gia").html(data.gia);
            $("#ibge").html(data.ibge);
            $("#localidade").html(data.localidade);
            $("#logradouro").html(data.logradouro);
            $("#uf").html(data.uf);
            $("#unidade").html(data.unidade);
        }
    })
}
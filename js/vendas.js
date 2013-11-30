vendas = {
  todas_json: [
                {
                  id: 1,
                  produto: "Nescau",
                  quantidade: 200,
                  total: 500
                },
                {
                  id: 2,
                  produto: "Arroz",
                  quantidade: 200,
                  total: 6000
                },
                {
                  id: 3,
                  produto: "Feijao",
                  quantidade: 300,
                  total: 1100
                },
                {
                  id: 4,
                  produto: "Macarrao",
                  quantidade: 500,
                  total: 1000
                },
                {
                  id: 5,
                  produto: "Agua",
                  quantidade: 100,
                  total: 500
                }
              ]
};

vendas.cria_linha = function() {
  return $("<tr></tr>");
};

vendas.cria_coluna = function(texto) {
  return $("<td></td>").html(texto);
};

vendas.cria_cabecalho = function(table){
  var cabecalho = $("<thead></thead>");
  var linha_cabecalho = vendas.cria_linha();
  var produto = vendas.cria_coluna("Produto");
  var quantidade = vendas.cria_coluna("Quantidade");
  var total = vendas.cria_coluna("Total");
  linha_cabecalho.append(produto);
  linha_cabecalho.append(quantidade);
  linha_cabecalho.append(total);
  cabecalho.append(linha_cabecalho);
  table.append(cabecalho);
};

vendas.cria_tabela = function(data) {
  var table = $("<table></table>").addClass("table table-bordered table-striped table-hover");
  vendas.cria_cabecalho(table);
  for (var i = 0; i < data.length; i++){
    var linha = vendas.cria_linha();
    var produto = vendas.cria_coluna(data[i].produto);
    var quantidade = vendas.cria_coluna(data[i].quantidade);
    var total = vendas.cria_coluna(data[i].total);
    linha.append(produto);
    linha.append(quantidade);
    linha.append(total);
    table.append(linha);
  };
  return table;
};

vendas.ultimas_vendas = function(callback) {
  //Chama um getJSON aqui por exemplo
  var table = vendas.cria_tabela(vendas.todas_json);
  callback(table);
}

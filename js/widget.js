widgets = {
  locations: []
};

widgets.cria_widget_basico = function(html, widget_data) {
  var conteudo = $("<li></li>").attr("id", widget_data);
  var div = $("<div class='conteudo'></div>");
  conteudo.append("<aside class='close'></aside>");
  div.append(html);
  conteudo.append(div);
  return conteudo;
};

widgets.update_locations = function() {
  widgets.locations = widgets.gridster.serialize();
}

widgets.enable_option = function(element) {
  $("button[data-widget=" + element.attr("id") + "]").removeClass("disabled");
};

widgets.update_closes = function() {
  $(".close").click(function(){
    widgets.enable_option($(this).parent());
    widgets.gridster.remove_widget($(this).parent(), function(){
      widgets.update_locations();
    });
  });
};

widgets.carrega_conteudo = function(widget_data) {
  var conteudo = "";
  if (widget_data == "vendas") {
    vendas.ultimas_vendas(function(table){
      conteudo = widgets.cria_widget_basico(table, widget_data);
    });
  } else if (widget_data == "estatisticas") {
    conteudo = widgets.cria_widget_basico("Conteudo de estatisticas", widget_data);
  }
  return conteudo;
};

$(function(){
  widgets.gridster = $(".gridster ul").gridster({
      widget_margins: [20, 20],
      widget_base_dimensions: [140, 140],
      draggable: {
        stop: function() {
          widgets.update_locations();
        }
      }
  }).data('gridster');

  widgets.update_locations();
  widgets.update_closes();

  $(".add_widget").click(function(){
    var widget_data = $(this).attr("data-widget");
    var conteudo = widgets.carrega_conteudo(widget_data);
    widgets.gridster.add_widget.apply(widgets.gridster, [conteudo, 3, 2]);
    widgets.update_closes();
    widgets.update_locations();
    $(this).addClass("disabled");
  });
});

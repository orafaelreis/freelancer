function validaForm(f){
var a = new Array("Nome","E-mail","Telefone","Endereço","Mensagem");
var b = new Array("Mensagem");

var ok = 1;

$("input",f).each(function(i){
  if(i<a.length){
    $(this).removeClass("error");
    ok = validaCampo(this,a[i]);
    if(!ok) return false;
  }
});

$("textarea",f).each(function(i){
  if(!ok)return false;
  $(this).removeClass("error");
  ok = validaCampo(this,b[i]);
});

if(ok && !valida_email(f.femail.value)){
  showMessage("Erro: E-mail inv&aacute;lido.");
  $(f.femail).addClass("error").focus();
  return false;
}
return ok;
}

function validaCampo(campo,vinicio){
  hideMessage();
  if(campo.value =="" || campo.value == vinicio){
    showMessage("Erro: Verifique o campo "+vinicio+".");
    $(campo).addClass("error");
    return false;
  }
  return true;
}

function valida_email(mail){
var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
return er.test(mail);
}

function showMessage(text){
  $('#form_warning').html(text);
}

function hideMessage(){
  $('#form_warning').html('');
}

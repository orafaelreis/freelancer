/**
 *  maskbrphone for jQuery, version 1.0.0
 *  (c) 2014 Márcio Simão (https://github.com/masimao)
 *
 *  maskbrphone for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/masimao/maskbrphone
 */
(function($) {

  $.fn.maskbrphone = function() {

    var plugin = this;
    var init = function() {

      return plugin.each(function() {
        $(this).val(applyMask($(this).val()));
        $(this).keyup(function() {
          $(this).val(applyMask($(this).val()));
        });
      });
    };

    var applyMask = function(input) {
      //obtem os 11 primeiros numeros do campo
      var fone = input.replace(/\D/g, '').substring(0, 11);
      var hifeRegex = (fone.length <= 8)? /(\d{5})(\d{1,4})/ : /(\d{6})(\d{1,5})/;
      //aplica hifen
      var masked = fone.replace(hifeRegex, '$1-$2');
      //aplica parenteses
      masked = masked.replace(/(\d{2})(\d{1,2})/, '($1) $2');

      return masked;
    };

    init();
  };

}(jQuery));

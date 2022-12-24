sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("palindrome1.palindromeproject1.controller.View1", {
            onInit: function () {

            },

            onPressSubmit: function(){
                var str = this.getView().byId("inpt1").getValue();
                var len = str.length;
                var msg;

                for(var i = 0; i<len/2; i++){
                    if(str[i] != str[len - 1 - i]){
                       msg = "Not a Palindrome!";
                    }
                    else{
                        msg = "Palindrome";
                    }
                }
               alert(msg);
            }
            
        });
    });

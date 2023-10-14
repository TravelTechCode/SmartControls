sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pri.smartcontrols.controller.Detail", {
            onInit: function () {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this._onRouteMatched,this);
            },
            _onRouteMatched:function(oEvent){
                let customerID = oEvent.getParameter('arguments').customerID;
            }
        });
    });
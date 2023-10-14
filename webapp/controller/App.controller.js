sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pri.smartcontrols.controller.App", {
            onInit: function () {

            },
            handleSelectionChange: function (oEvent) {
                let oContext = oEvent.getParameter('listItem').getBindingContext().getObject();
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Detail", {
                    customerID: oContext.CustomerID
                });
            }
        });
    });

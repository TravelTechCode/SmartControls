/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pri/smartcontrols/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

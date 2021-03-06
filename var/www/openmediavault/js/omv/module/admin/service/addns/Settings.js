/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 2
 * @author    Gerik Bonaert <dev@adaxisoft.be>
 * @copyright Copyright (c) 2013 Gerik Bonaert
 *
 * Addns for OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
//require("js/omv/WorkspaceManager.js")
//require("js/omv/workspace/form/Panel.js")

/**
* @class OMV.module.admin.privilege.ldap.Settings
* @derived OMV.workspace.form.Panel
*/
Ext.define("OMV.module.admin.service.addns.Settings", {
	extend: "OMV.workspace.form.Panel",

	rpcService: "Addns",
	rpcGetMethod: "getSettings",
	rpcSetMethod: "setSettings",

	getFormItems: function() {
		return [{
			xtype: "fieldset",
			title: _("General settings"),
			fieldDefaults: {
				labelSeparator: ""
			},
			items: [{
				xtype: "checkbox",
				name: "enable",
				fieldLabel: _("Enable"),
				checked: false
			},{
				xtype: "textfield",
				name: "dyndns",
				fieldLabel: _("DynDNS"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("The hostname or IP address of the DynDNS service.")
				}]
			},{
				xtype: "textfield",
				name: "record",
				fieldLabel: _("Record"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the domain to be updated.")
				}]
			},{
				xtype: "textfield",
				name: "username",
				fieldLabel: _("Username"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the username needed to connect to the DynDNS service.")
				}]
			},{
				xtype: "passwordfield",
				name: "password",
				fieldLabel: _("Password"),
				allowBlank: false,
				plugins: [{
					ptype: "fieldinfo",
					text: _("Specifies the password needed to connect to the DynDNS service.")
				}]
			}]
		}];
	}
});


OMV.WorkspaceManager.registerPanel({
	id: "settings",
	path: "/service/addns",
	text: _("Settings"),
	position: 10,
	className: "OMV.module.admin.service.addns.Settings"
});

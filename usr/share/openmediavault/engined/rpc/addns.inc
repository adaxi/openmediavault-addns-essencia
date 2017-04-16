<?php
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

class OMVRpcServiceAddns extends \OMV\Rpc\ServiceAbstract {
	/**
	 * Get the RPC service name.
	 */
	public function getName() {
		return "Addns";
	}

	/**
	 * Initialize the RPC service.
	 */
	public function initialize() {
		$this->registerMethod("getSettings");
		$this->registerMethod("setSettings");
	}

	/**
	 * Get configuration object.
	 * @param params The method parameters.
	 * @param context The context of the caller.
	 * @return The requested configuration object.
	 * @throw E_CONFIG_GET_OBJECT_FAILED
	 */
	function getSettings($params, $context) {
		// Validate the RPC caller context.
		$this->validateMethodContext($context, array(
			  "role" => OMV_ROLE_ADMINISTRATOR
		  ));
		// Get the configuration object.
		$db = \OMV\Config\Database::getInstance();
		$object = $db->get("conf.service.addns");
		return $object->getAssoc();
	}

	/**
	 * Set configuration object.
	 * @param params The method parameters.
	 * @param context The context of the caller.
	 * @return The stored configuration object.
	 * @throw E_CONFIG_GET_OBJECT_FAILED
	 * @throw E_CONFIG_SET_OBJECT_FAILED
	 */
	function setSettings($params, $context) {
		// Validate the RPC caller context.
		$this->validateMethodContext($context, [
			  "role" => OMV_ROLE_ADMINISTRATOR
		]);
		// Validate the parameters of the RPC service method.
		$this->validateMethodParams($params, "rpc.addns.set");
		// Get the existing configuration object.
		$db = \OMV\Config\Database::getInstance();
		$object = $db->get("conf.service.addns");
		$object->setAssoc($params);
		$db->set($object);
		return $object->getAssoc();
	}
	
}

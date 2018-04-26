/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const wsRPC = require('../rpc/ws_rpc').wsRPC;

const masterToSlaveSender = {
	send: (workerId, data, cb) => {
		const sendPayload = Object.assign({}, { data });
		wsRPC.getServer().sendToWorker(workerId, sendPayload, cb);
	},
	emit: (workerId, data) => {
		const emitPayload = Object.assign({}, { data });
		wsRPC.getServer().sendToWorker(workerId, emitPayload);
	},
};

module.exports = masterToSlaveSender;
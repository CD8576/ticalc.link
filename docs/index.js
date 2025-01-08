(() => {
	var e = {
			918: function(e) {
				var t, n;
				e.exports = (t = {
					509: (e, t, n) => {
						function r(e, t) {
							const n = e.data && e.data.length || 0,
								r = s(n, 4);
							r.splice(4, 0, ...s(e.type, t));
							const i = new Uint8Array(r.length + n);
							return i.set(r), i.set(e.data || [], r.length), i
						}

						function s(e, t) {
							if (e > Number.MAX_SAFE_INTEGER) throw "Number too big to reliably convert";
							const n = [];
							for (; t > 0;) t--, n.push(e / Math.pow(256, t) & 255);
							return n
						}

						function i(e) {
							if (! function(e) {
									let t = !1;
									return (e = e.filter((e => !(0 == e && !t || (t = !0, 0))))).length < 7 || 7 == e.length && e[0] <= 31
								}(e)) throw "Number too big to reliably convert";
							let t = e.length,
								n = 0,
								r = 0;
							for (; t > 0;) t--, n += (255 & e[r++]) * Math.pow(256, t);
							return n
						}
						e.exports = {
							constructRawPacket: function(e) {
								return r(e, 1)
							},
							destructRawPacket: function(e) {
								return {
									size: i(e.slice(0, 4)),
									type: e[4],
									data: e.slice(5)
								}
							},
							constructVirtualPacket: function(e) {
								return r(e, 2)
							},
							destructVirtualPacket: function(e) {
								return {
									size: i(e.slice(0, 4)),
									type: i(e.slice(4, 6)),
									data: e.slice(6)
								}
							},
							constructParameters: function(e) {
								return new Uint8Array([s(e.length, 2), ...e.map((e => [s(e.type, 2), s(e.size, 2), s(e.value, e.size)].flat()))].flat())
							},
							destructParameters: function(e) {
								const t = [],
									n = i(e.slice(0, 2));
								let r = 2;
								for (let s = 0; s < n; s++) {
									const n = i(e.slice(r + 3, r + 5));
									t.push({
										type: i(e.slice(r, r + 2)),
										ok: 0 == e[r + 2],
										size: n,
										value: i(e.slice(r + 5, r + 5 + n))
									}), r += 5 + n
								}
								return t
							},
							intToBytes: s,
							bytesToInt: i,
							asciiToBytes: function(e, t) {
								t = t || e.length + 1;
								const r = new("undefined" != typeof TextEncoder ? TextEncoder : n(790).TextEncoder)("utf-8").encode(e),
									s = new Uint8Array(t);
								return s.set(r.slice(0, t)), s
							},
							bytesToAscii: function(e) {
								const t = e.indexOf(0);
								return t >= 0 && (e = e.slice(0, t)), new("undefined" != typeof TextDecoder ? TextDecoder : n(790).TextDecoder)("utf-8").decode(e)
							},
							chunkArray: function(e, t) {
								const n = [];
								let r, s = 0;
								for (r = 0; r < t.length; r++)
									if (n.push(e.slice(s, s + t[r])), s += t[r], s >= e.length) return n;
								for (r--; s < e.length;) n.push(e.slice(s, s + t[r])), s += t[r];
								return n
							}
						}
					},
					24: e => {
						e.exports = {
							identifier: {
								vendorId: 1105
							}
						}
					},
					770: (e, t, n) => {
						const r = {
								name: "TI-83 Premium CE",
								status: "beta",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-83 Premium CE"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus", "TI-84 Plus Color"]
							},
							s = n(256);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					484: (e, t, n) => {
						const r = {
								name: "TI-84 Plus CE",
								status: "beta",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-84 Plus CE"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus", "TI-84 Plus Color"]
							},
							s = n(256);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					699: (e, t, n) => {
						const r = {
								name: "TI-82 Advanced",
								status: "experimental",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-82 Advanced"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus"]
							},
							s = n(875);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					662: (e, t, n) => {
						const r = {
								name: "TI-84 Plus",
								status: "supported",
								identifier: {
									vendorId: 1105,
									productId: 57347
								},
								matcher: {
									vendorId: 1105,
									productId: 57347
								},
								compatibleFiles: ["TI-83", "TI-84 Plus", ]
							},
							s = n(875);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					340: (e, t, n) => {
						const r = {
								name: "TI-84 Plus C Silver Edition",
								status: "experimental",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-84 Plus C Silver Edition"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus", "TI-84 Plus Color"]
							},
							s = n(875);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					986: (e, t, n) => {
						const r = {
								name: "TI-84 Plus SE",
								status: "beta",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-84 Plus Silver Edition"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus"]
							},
							s = n(875);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					659: (e, t, n) => {
						const r = {
								name: "TI-84 Plus T",
								status: "experimental",
								identifier: {
									vendorId: 1105,
									productId: 57352
								},
								matcher: {
									vendorId: 1105,
									productId: 57352,
									productName: "TI-84 Plus T"
								},
								compatibleFiles: ["TI-83", "TI-84 Plus"]
							},
							s = n(875);
						e.exports = {
							...r,
							connect: e => new s({
								device: e,
								properties: r
							}).connect()
						}
					},
					725: (e, t, n) => {
						const r = n(225),
							s = n(509);
						e.exports = class {
							constructor(e) {
								this._device = e
							}
							async connect() {
								await this._device.open(), await this._device.selectConfiguration(this._device.configuration.configurationValue);
								const e = this._device.configuration.interfaces[0];
								await this._device.claimInterface(e.interfaceNumber), this._inEndpoint = e.alternates[0].endpoints.find((e => "in" == e.direction)), this._outEndpoint = e.alternates[0].endpoints.find((e => "out" == e.direction)), this._bufferSize = await this._requestBufferSize()
							}
							async send(e) {
								const t = s.constructVirtualPacket(e),
									n = s.chunkArray(t || [], [this._bufferSize - r.rawPacketTypes.HEADER_SIZE]);
								for (let e = 0; e < n.length; e++) {
									const t = e == n.length - 1 ? r.rawPacketTypes.DUSB_RPKT_VIRT_DATA_LAST : r.rawPacketTypes.DUSB_RPKT_VIRT_DATA,
										i = n[e];
									await this._send(s.constructRawPacket({
										type: t,
										data: i
									})), await this._expectAck()
								}
							}
							async expect(e) {
								const t = s.destructRawPacket(await this._receive());
								if (t.type != r.rawPacketTypes.DUSB_RPKT_VIRT_DATA_LAST) throw `Expected raw packet type VIRT_DATA_LAST, but got ${t.type} instead`;
								const n = s.destructVirtualPacket(t.data);
								switch (n.type) {
									case e:
										return await this._sendAck(), n;
									case r.virtualPacketTypes.DUSB_VPKT_DELAY_ACK:
										await this._sendAck();
										const t = s.bytesToInt(n.data);
										return await this.wait(t / 1e3), this.expect(e);
									default:
										throw `Expected virtual packet type ${e}, but got ${n.type} instead`
								}
							}
							wait(e) {
								return new Promise(((t, n) => {
									setTimeout((() => t()), e)
								}))
							}
							async _requestBufferSize() {
								await this._send(s.constructRawPacket({
									type: r.rawPacketTypes.DUSB_RPKT_BUF_SIZE_REQ,
									data: [0, 0, 4, 0]
								}));
								const e = s.destructRawPacket(await this._receive());
								if (e.type != r.rawPacketTypes.DUSB_RPKT_BUF_SIZE_ALLOC) throw `Expected BUF_SIZE_ALLOC, got ${e.type} instead`;
								return s.bytesToInt(e.data)
							}
							_send(e) {
								return this._device.transferOut(this._outEndpoint.endpointNumber, e)
							}
							async _receive() {
								const e = await this._device.transferIn(this._inEndpoint.endpointNumber, this._inEndpoint.packetSize);
								if ("ok" != e.status) throw `Error in receiving data from device: ${e.status}`;
								return new Uint8Array(e.data.buffer)
							}
							_sendAck() {
								return this._send(s.constructRawPacket({
									type: r.rawPacketTypes.DUSB_RPKT_VIRT_DATA_ACK,
									data: [224, 0]
								}))
							}
							async _expectAck() {
								const e = s.destructRawPacket(await this._receive());
								if (e.type != r.rawPacketTypes.DUSB_RPKT_VIRT_DATA_ACK) throw `Expected ACK, got ${e.type} instead`
							}
						}
					},
					256: (e, t, n) => {
						const r = n(875);
						e.exports = class extends r {
							async getFreeMem() {
								const e = await super.getFreeMem();
								return 0 == e.ram && (e.ram = void 0), e
							}
						}
					},
					225: e => {
						e.exports = {
							rawPacketTypes: {
								DUSB_RPKT_BUF_SIZE_REQ: 1,
								DUSB_RPKT_BUF_SIZE_ALLOC: 2,
								DUSB_RPKT_VIRT_DATA: 3,
								DUSB_RPKT_VIRT_DATA_LAST: 4,
								DUSB_RPKT_VIRT_DATA_ACK: 5,
								HEADER_SIZE: 5
							},
							virtualPacketTypes: {
								DUSB_VPKT_PING: 1,
								DUSB_VPKT_OS_BEGIN: 2,
								DUSB_VPKT_OS_ACK: 3,
								DUSB_VPKT_OS_HEADER: 4,
								DUSB_VPKT_OS_DATA: 5,
								DUSB_VPKT_EOT_ACK: 6,
								DUSB_VPKT_PARM_REQ: 7,
								DUSB_VPKT_PARM_DATA: 8,
								DUSB_VPKT_DIR_REQ: 9,
								DUSB_VPKT_VAR_HDR: 10,
								DUSB_VPKT_RTS: 11,
								DUSB_VPKT_VAR_REQ: 12,
								DUSB_VPKT_VAR_CNTS: 13,
								DUSB_VPKT_PARM_SET: 14,
								DUSB_VPKT_MODIF_VAR: 16,
								DUSB_VPKT_EXECUTE: 17,
								DUSB_VPKT_MODE_SET: 18,
								DUSB_VPKT_DATA_ACK: 43520,
								DUSB_VPKT_DELAY_ACK: 47872,
								DUSB_VPKT_EOT: 56576,
								DUSB_VPKT_ERROR: 60928,
								HEADER_SIZE: 6
							},
							modes: {
								DUSB_MODE_STARTUP: [0, 1, 0, 1, 0, 0, 0, 0, 7, 208],
								DUSB_MODE_BASIC: [0, 2, 0, 1, 0, 0, 0, 0, 7, 208],
								DUSB_MODE_NORMAL: [0, 3, 0, 1, 0, 0, 0, 0, 7, 208]
							},
							executeCommands: {
								DUSB_EID_PRGM: 0,
								DUSB_EID_ASM: 1,
								DUSB_EID_APP: 2,
								DUSB_EID_KEY: 3,
								DUSB_EID_UNKNOWN: 4
							},
							parameters: {
								DUSB_PID_PRODUCT_NUMBER: 1,
								DUSB_PID_PRODUCT_NAME: 2,
								DUSB_PID_MAIN_PART_ID: 3,
								DUSB_PID_HW_VERSION: 4,
								DUSB_PID_FREE_RAM: 14,
								DUSB_PID_FREE_FLASH: 17,
								DUSB_PID_COLOR_AVAILABLE: 27,
								DUSB_PID_BITS_PER_PIXEL: 29,
								DUSB_PID_LCD_WIDTH: 30,
								DUSB_PID_LCD_HEIGHT: 31,
								DUSB_PID_MATH_CAPABILITIES: 75,
								DUSB_PID_PYTHON_ON_BOARD: 93
							},
							attributes: {
								DUSB_AID_VAR_TYPE: 2,
								DUSB_AID_ARCHIVED: 3,
								DUSB_AID_VAR_VERSION: 8
							},
							transferModes: {
								SILENT: 1,
								NON_SILENT: 2
							}
						}
					},
					875: (e, t, n) => {
						const r = n(725),
							s = n(225),
							i = n(509);
						e.exports = class {
							constructor({
								device: e,
								properties: t
							}) {
								this._d = new r(e), Object.assign(this, t)
							}
							async connect() {
								return await this._d.connect(), this
							}
							canReceive(e) {
								return this.compatibleFiles.includes(e.calcType)
							}
							async getStorageDetails(e) {
								const t = await this.getFreeMem(),
									n = {
										ram: e.entries.filter((e => !e.attributes.archived)).reduce(((e, t) => e + t.size), 0),
										flash: e.entries.filter((e => e.attributes.archived)).reduce(((e, t) => e + t.size), 0)
									};
								return {
									free: t,
									required: n,
									fits: t.flash >= n.flash && (void 0 === t.ram || t.ram >= n.ram)
								}
							}
							async isReady() {
								try {
									return await this._d.send({
										type: s.virtualPacketTypes.DUSB_VPKT_PING,
										data: s.modes.DUSB_MODE_NORMAL
									}), await this._d.expect(s.virtualPacketTypes.DUSB_VPKT_MODE_SET), !0
								} catch (e) {
									return console.debug(e), !1
								}
							}
							async pressKey(e) {
								await this._d.send({
									type: s.virtualPacketTypes.DUSB_VPKT_EXECUTE,
									data: [0, 0, s.executeCommands.DUSB_EID_KEY, 0, e]
								}), await this._d.expect(s.virtualPacketTypes.DUSB_VPKT_DATA_ACK)
							}
							async getFreeMem() {
								await this._d.send({
									type: s.virtualPacketTypes.DUSB_VPKT_PARM_REQ,
									data: [0, 2, i.intToBytes(s.parameters.DUSB_PID_FREE_RAM, 2), i.intToBytes(s.parameters.DUSB_PID_FREE_FLASH, 2)].flat()
								});
								const e = await this._d.expect(s.virtualPacketTypes.DUSB_VPKT_PARM_DATA),
									t = i.destructParameters(e.data);
								if (!t.every((e => e.ok))) throw "Could not succesfully get all parameters";
								return {
									ram: t.find((e => e.type == s.parameters.DUSB_PID_FREE_RAM)).value,
									flash: t.find((e => e.type == s.parameters.DUSB_PID_FREE_FLASH)).value
								}
							}
							async sendFile(e) {
								for (let t = 0; t < e.entries.length; t++) await this._sendEntry(e.entries[t])
							}
							async _sendEntry(e) {
								await this._d.send({
									type: s.virtualPacketTypes.DUSB_VPKT_RTS,
									data: [...i.intToBytes(e.name.length, 2), ...i.asciiToBytes(e.name, e.name.length), 0, ...i.intToBytes(e.size, 4), s.transferModes.SILENT, ...this._entryParameters(e)]
								}), await this._d.expect(s.virtualPacketTypes.DUSB_VPKT_DATA_ACK), await this._d.send({
									type: s.virtualPacketTypes.DUSB_VPKT_VAR_CNTS,
									data: e.data
								}), await this._d.expect(s.virtualPacketTypes.DUSB_VPKT_DATA_ACK), await this._d.send({
									type: s.virtualPacketTypes.DUSB_VPKT_EOT
								})
							}
							_entryParameters(e) {
								return i.constructParameters([{
									type: s.attributes.DUSB_AID_VAR_TYPE,
									size: 4,
									value: 4026990592 + e.type
								}, {
									type: s.attributes.DUSB_AID_ARCHIVED,
									size: 1,
									value: e.attributes && e.attributes.archived ? 1 : 0
								}, {
									type: s.attributes.DUSB_AID_VAR_VERSION,
									size: 4,
									value: e.attributes && e.attributes.version || 0
								}])
							}
						}
					},
					138: (e, t, n) => {
						e.exports = {
							ticalc: n(315),
							tifiles: n(823)
						}
					},
					315: (e, t, n) => {
						const r = n(549),
							s = [n(699), n(662), n(340), n(986), n(659), n(770), n(484)],
							i = ["none", "experimental", "beta", "partial-support", "supported"];
						let c, o = d();
						const a = {},
							u = {
								connect: [],
								disconnect: []
							};

						function d(e) {
							if (e || (e = "supported"), !i.includes(e)) throw "Invalid support level selected, should be one of: " + i.join(", ");
							if ("none" == e) return s.concat(n(24));
							const t = i.slice(i.indexOf(e));
							return s.filter((e => t.includes(e.status)))
						}

						function l() {
							return !!navigator.usb
						}
						async function p(e) {
							const t = o.filter((e => e.matcher)).find((t => Object.keys(t.matcher).every((n => t.matcher[n] == e[n]))));
							if (!t) throw {
								message: "Calculator model not supported",
								device: e
							};
							const n = await t.connect(e);
							return a[e.toString()] = n, n
						}
						async function _(e) {
							return a[e] || await p(e)
						}

						function T() {
							if (!l()) throw "Browser not supported";
							return c || (c = r(navigator.usb, {
								injections: {
									transferIn: (e, t) => console.debug("🖥←📱 Received:", y(new Uint8Array(t.data.buffer))),
									transferOut: (e, t) => console.debug("🖥→📱 Sent:    ", y(e[1]))
								}
							}), c)
						}

						function y(e) {
							const t = [...e].map((e => e.toString(16).toUpperCase().padStart(2, "0")));
							return [t.slice(0, 4).join(""), t.slice(4, 5).join(""), t.length > 10 ? [t.slice(5, 9).join(""), t.slice(9, 11).join(""), t.slice(11).join(",")] : t.slice(5).join(",")].flat().join(" ")
						}
						e.exports = {
							browserSupported: l,
							models: () => s.map((e => ({
								name: e.name,
								status: e.status,
								matcher: e.matcher
							}))),
							addEventListener: (e, t) => {
								if (!Object.keys(u).includes(e)) throw `Invalid event name: ${e}`;
								u[e].push(t)
							},
							init: async (e = {}) => {
								e.usb || T(), o = d(e.supportLevel), navigator.usb.addEventListener("connect", (async e => {
									const t = await _(device);
									console.debug("📱 Calculator connected"), t && u.connect.forEach((e => e(t)))
								})), navigator.usb.addEventListener("disconnect", (e => {
									const t = a[e.device];
									console.debug("📱 Calculator disconnected"), t && u.disconnect.forEach((e => e(t)))
								}));
								const t = await navigator.usb.getDevices();
								for (let e = 0; e < t.length; e++) {
									const n = await _(t[e]);
									u.connect.forEach((e => e(n)))
								}
							},
							choose: async (e = {}) => {
								const t = e.usb || T();
								let n;
								try {
									n = await t.requestDevice({
										filters: o.map((e => e.identifier)).filter(((e, t, n) => t === n.findIndex((t => t.vendorId === e.vendorId && t.productId === e.productId)))).sort(((e, t) => e.vendorId > t.vendorId ? 1 : e.vendorId < t.vendorId ? -1 : e.productId < t.productId ? 1 : -1))
									})
								} catch (e) {
									throw e
								}
								const r = await p(n);
								u.connect.forEach((e => e(r)))
							},
							getRecording: () => c
						}
					},
					823: (e, t, n) => {
						const r = n(509);

						function s(e, t) {
							const n = [];
							let r = 0;
							for (; r < t.size;) {
								const s = i(e.slice(r), t);
								n.push(s), r += s.entrySize
							}
							return n
						}

						function i(e, t) {
							const n = function(e, t) {
									const n = r.bytesToInt(e.slice(0, 2).reverse()),
										s = 13 == n,
										i = n >= 12;
									if ("TI-85" == t.calcType) {
										const t = e[5];
										return {
											size: 6 + t + 2,
											name: e.slice(6, 6 + t),
											attributes: !1
										}
									}
									if ("TI-86" == t.calcType) return {
										size: 6 + (i ? 8 : e[5]) + 2,
										name: e.slice(6, 6 + e[5]),
										attributes: !1
									};
									if (s) {
										const t = r.bytesToInt(e.slice(13, 15).reverse());
										return {
											size: 17,
											name: e.slice(5, 13),
											attributes: 128 == t ? {
												archived: !0,
												version: 0
											} : {
												archived: !!(32768 & t),
												version: 255 & t
											}
										}
									}
									return {
										size: 15,
										name: e.slice(5, 13),
										attributes: !1
									}
								}(e, t),
								s = r.bytesToInt(e.slice(2, 4).reverse());
							return {
								name: r.bytesToAscii(n.name),
								type: e[4],
								attributes: n.attributes,
								size: s,
								data: e.slice(n.size, n.size + s),
								entrySize: n.size + s,
								debug: {
									packetLength: r.bytesToInt(e.slice(0, 2).reverse()),
									ti83p: 13 == r.bytesToInt(e.slice(0, 2).reverse()),
									padded86: r.bytesToInt(e.slice(0, 2).reverse()) > 12,
									nameLength: e[5],
									headerSize: n.size,
									size2: r.bytesToInt(e.slice(n.size - 2, n.size).reverse())
								}
							}
						}

						function c(e) {
							return 26 == e[0] && 12 == e[1] && 0 == e[2] ? "TI-85 style signature present" : 26 == e[0] && 10 == e[1] && 0 == e[2] ? "TI-73/82/83/86 style signature present" : "NONE"
						}
						e.exports = {
							parseFile: e => {
								const t = (n = e.slice(0, 8), {
									"**TI73**": "TI-73",
									"**TI82**": "TI-82",
									"**TI83**": "TI-83",
									"**TI83F*": "TI-84 Plus",
									"**TI85**": "TI-85",
									"**TI86**": "TI-86",
									"**TI89**": "TI-89",
									"**TI92**": "TI-92",
									"**TI92P*": "TI-92 Plus",
									"**V200**": "TI-V200",
									"**TICBL*": "TI-CBL2"
								} [r.bytesToAscii(n)] || "NONE");
								var n;
								const i = r.bytesToInt(e.slice(53, 55).reverse());
								return {
									calcType: t,
									size: i,
									comments: r.bytesToAscii(e.slice(11, 53)),
									entries: s(e.slice(55), {
										size: i,
										calcType: t
									}),
									debug: {
										signature: c(e.slice(8, 11)),
										sizeCorrect: e.length == i + 8 + 3 + 42 + 2 + 2,
										checksum: e.slice(e.length - 2, e.length)
									}
								}
							},
							isValid: e => "NONE" != e.calcType && e.size > 0 && e.debug.sizeCorrect && e.entries.length > 0
						}
					},
					549: e => {
						e.exports = (e, n) => new t(e, n);
						class t {
							constructor(e, t = {}) {
								this._usb = e, this._options = t, this._steps = []
							}
							async requestDevice(...e) {
								const t = await this._usb.requestDevice(...e),
									n = this._proxy(t);
								return this._logStep({
									action: "asyncFunctionCall",
									name: "requestDevice",
									parameters: e,
									resolve: t
								}), n
							}
							async getDevices(...e) {
								const t = await this._usb.getDevices(...e),
									n = t.map((e => this._proxy(e)));
								return this._logStep({
									action: "asyncFunctionCall",
									name: "getDevices",
									parameters: e,
									resolve: t
								}), n
							}
							getSteps() {
								return this._steps
							}
							_proxy(e) {
								return new Proxy(e, {
									get: (e, t) => {
										if ("function" != typeof e[t]) {
											const n = Reflect.get(e, t);
											return this._logPropertyAccess(n, t)
										}
										return (...n) => {
											const r = e[t](...n);
											return r instanceof Promise ? this._logPromise(r, t, n) : this._logFunctionCall(r, t, n)
										}
									}
								})
							}
							_logPromise(e, t, r) {
								return e.then((e => (this._logStep({
									action: "asyncFunctionCall",
									name: t.toString(),
									parameters: n(r),
									resolve: n(e)
								}), this._inject(e, t, r), e))).catch((e => {
									throw this._logStep({
										action: "asyncFunctionCall",
										name: t.toString(),
										parameters: n(r),
										reject: n(e)
									}), this._inject(e, t, r), e
								}))
							}
							_logFunctionCall(e, t, r) {
								return this._logStep({
									action: "functionCall",
									name: t.toString(),
									parameters: n(r),
									result: n(e)
								}), this._inject(e, t, r), e
							}
							_logPropertyAccess(e, t) {
								return this._logStep({
									action: "propertyAccess",
									name: t.toString(),
									result: n(e)
								}), e
							}
							_logStep(e) {
								this._steps.push(e), this._options.verbose && console.debug(e)
							}
							_inject(e, t, n) {
								this._options.injections && this._options.injections[t] && this._options.injections[t](n, e)
							}
						}

						function n(e) {
							return e ? e instanceof DataView ? {
								byteLength: (t = e).byteLength,
								byteOffset: t.byteOffset,
								buffer: Array.from(new Uint8Array(t.buffer))
							} : Array.isArray(e) ? e.map((e => n(e))) : "object" == typeof e ? (r = e, Object.keys(r).reduce(((e, t) => (e[t] = n(r[t]), e)), {})) : JSON.parse(JSON.stringify(e)) : e;
							var t, r
						}
					},
					790: () => {}
				}, n = {}, function e(r) {
					var s = n[r];
					if (void 0 !== s) return s.exports;
					var i = n[r] = {
						exports: {}
					};
					return t[r](i, i.exports, e), i.exports
				}(138))
			}
		},
		t = {};

	function n(r) {
		var s = t[r];
		if (void 0 !== s) return s.exports;
		var i = t[r] = {
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, n), i.exports
	}(() => {
		const {
			ticalc: e,
			tifiles: t
		} = n(918);
		let r = null,
			s = null;

		function i() {
			document.querySelectorAll(".buttons button").forEach((e => e.classList.remove("active", "complete"))), r ? document.querySelector("#connect").classList.add("complete") : (document.querySelector("#connect").classList.add("active"), document.querySelector("#connect").focus()), s ? document.querySelector("#upload").classList.add("complete") : r && (document.querySelector("#upload").classList.add("active"), document.querySelector("#upload").focus()), r && s && (document.querySelector("#start").classList.add("active"), document.querySelector("#start").focus())
		}
		async function c(e) {
			await e.isReady() ? (r = e, i()) : d("Sorry!", "The connected device does not seem to be responding.")
		}

		function o(e) {
			e && "Calculator model not supported" == e.message ? l("Sorry!", "It looks like your device is not yet supported. Would you like to submit it for consideration?").then((() => function(e) {
				document.querySelector("#flow").innerHTML = `\n    <h1>Device info to submit</h1>\n    <p>Please <a href='https://github.com/Timendus/ticalc-usb/issues/new?assignees=&labels=device+support+request&template=calculator-support-request.md&title=Calculator+support+request' target="_blank">file a support request on Github</a> with the following information:</p>\n    <pre>${JSON.stringify({deviceClass:e.deviceClass,deviceProtocol:e.deviceProtocol,deviceSubclass:e.deviceSubclass,deviceVersionMajor:e.deviceVersionMajor,deviceVersionMinor:e.deviceVersionMinor,deviceVersionSubminor:e.deviceVersionSubminor,manufacturerName:e.manufacturerName,productId:e.productId,productName:e.productName,serialNumber:e.serialNumber,usbVersionMajor:e.usbVersionMajor,usbVersionMinor:e.usbVersionMinor,usbVersionSubminor:e.usbVersionSubminor,vendorId:e.vendorId},null,2)}</pre>\n  `
			}(e.device))).catch((() => {})) : console.error(e)
		}

		function a(e, t) {
			const n = document.getElementById("popup");
			return n.querySelector("h2").innerText = e, n.querySelector("p").innerText = t, n.querySelector(".buttons").innerHTML = "", n
		}

		function u(e, t, n) {
			const r = document.createElement("button");
			return r.classList.add(e), r.innerText = t, r.onclick = n, r
		}

		function d(e, t) {
			return new Promise(((n, r) => {
				const s = a(e, t),
					i = u("yes", "Okay", (() => {
						s.classList.remove("active"), n()
					}));
				s.querySelector(".buttons").appendChild(i), s.classList.add("active")
			}))
		}

		function l(e, t) {
			return new Promise(((n, r) => {
				const s = a(e, t),
					i = u("yes", "Okay", (() => {
						s.classList.remove("active"), n()
					})),
					c = u("no", "Cancel", (() => {
						s.classList.remove("active"), r()
					}));
				s.querySelector(".buttons").appendChild(i), s.querySelector(".buttons").appendChild(c), s.classList.add("active")
			}))
		}
		window.addEventListener("load", (() => {
			e.browserSupported() ? (function() {
				const t = e.models().filter((e => "supported" == e.status || "beta" == e.status)).map((e => "beta" == e.status ? e.name + " (beta)" : e.name)).join(", ");
				document.querySelector("#supported").innerText = t
			}(), e.addEventListener("disconnect", (e => {
				e == r && (r = null, i())
			})), e.addEventListener("connect", (async e => "experimental" == e.status || "beta" == e.status ? l("Be careful!", `Your device (${e.name}) only has ${e.status} support. Are you sure you want to continue?`).then((() => c(e))).catch((() => {})) : c(e))), i(), document.querySelector("#connect").addEventListener("click", (() => e.choose().catch((e => o(e))))), document.querySelector("#upload").addEventListener("click", (() => function() {
				const e = document.createElement("input");
				e.type = "file", e.accept = ".8xp,.8xg,.83p,.83g,.82p,.82g", e.addEventListener("change", (async e => {
					if (s = t.parseFile(await
							function(e) {
								return new Promise(((t, n) => {
									var r = new FileReader;
									r.addEventListener("load", (e => t(new Uint8Array(e.target.result)))), r.readAsArrayBuffer(e)
								}))
							}(e.target.files[0])), console.log(s), t.isValid(s) || (s = null, d("Sorry!", "The file you have selected does not seem to be a valid calculator file")), r && !r.canReceive(s)) return d("Careful!", `The file you have selected does not appear to be a valid file for your ${r.name}.`);
					i()
				})), e.click()
			}())), document.querySelector("#start").addEventListener("click", (() => async function() {
				if (r && s) {
					if (!r.canReceive(s)) return d("Sorry!", `The file you have selected does not appear to be a valid file for your ${r.name}.`);
					if (!(await r.getStorageDetails(s)).fits) return d("Sorry!", "Your calculator does not have enough free memory to receive this file.");
					try {
						await r.sendFile(s), document.querySelector("#start").classList.remove("active"), document.querySelector("#start").classList.add("complete"), d("Success!", "The file has been sent!")
					} catch (e) {
						d("Sorry!", "Something went wrong 😢"), console.error(e)
					}
				}
			}())), e.init({
				supportLevel: "none"
			}).catch((e => o(e))), document.querySelector("#flow").classList.add("active"), document.querySelector("#incompatible").classList.remove("active")) : (document.querySelector("#flow").classList.remove("active"), document.querySelector("#incompatible").classList.add("active"))
		}))
	})()
})();

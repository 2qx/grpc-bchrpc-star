// source: bchrpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.pb.TransactionFilter');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pb.Transaction.Input.Outpoint');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.TransactionFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.TransactionFilter.repeatedFields_, null);
};
goog.inherits(proto.pb.TransactionFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.TransactionFilter.displayName = 'proto.pb.TransactionFilter';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.TransactionFilter.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.TransactionFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.TransactionFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.TransactionFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.TransactionFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    outpointsList: jspb.Message.toObjectList(msg.getOutpointsList(),
    proto.pb.Transaction.Input.Outpoint.toObject, includeInstance),
    dataElementsList: msg.getDataElementsList_asB64(),
    allTransactions: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.TransactionFilter}
 */
proto.pb.TransactionFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.TransactionFilter;
  return proto.pb.TransactionFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.TransactionFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.TransactionFilter}
 */
proto.pb.TransactionFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddresses(value);
      break;
    case 2:
      var value = new proto.pb.Transaction.Input.Outpoint;
      reader.readMessage(value,proto.pb.Transaction.Input.Outpoint.deserializeBinaryFromReader);
      msg.addOutpoints(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addDataElements(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.TransactionFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.TransactionFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.TransactionFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.TransactionFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getOutpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pb.Transaction.Input.Outpoint.serializeBinaryToWriter
    );
  }
  f = message.getDataElementsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getAllTransactions();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated string addresses = 1;
 * @return {!Array<string>}
 */
proto.pb.TransactionFilter.prototype.getAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


/**
 * repeated Transaction.Input.Outpoint outpoints = 2;
 * @return {!Array<!proto.pb.Transaction.Input.Outpoint>}
 */
proto.pb.TransactionFilter.prototype.getOutpointsList = function() {
  return /** @type{!Array<!proto.pb.Transaction.Input.Outpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Transaction.Input.Outpoint, 2));
};


/**
 * @param {!Array<!proto.pb.Transaction.Input.Outpoint>} value
 * @return {!proto.pb.TransactionFilter} returns this
*/
proto.pb.TransactionFilter.prototype.setOutpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.Transaction.Input.Outpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Transaction.Input.Outpoint}
 */
proto.pb.TransactionFilter.prototype.addOutpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.Transaction.Input.Outpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.clearOutpointsList = function() {
  return this.setOutpointsList([]);
};


/**
 * repeated bytes data_elements = 3;
 * @return {!Array<string>}
 */
proto.pb.TransactionFilter.prototype.getDataElementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes data_elements = 3;
 * This is a type-conversion wrapper around `getDataElementsList()`
 * @return {!Array<string>}
 */
proto.pb.TransactionFilter.prototype.getDataElementsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getDataElementsList()));
};


/**
 * repeated bytes data_elements = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDataElementsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.pb.TransactionFilter.prototype.getDataElementsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getDataElementsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.setDataElementsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.addDataElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.clearDataElementsList = function() {
  return this.setDataElementsList([]);
};


/**
 * optional bool all_transactions = 4;
 * @return {boolean}
 */
proto.pb.TransactionFilter.prototype.getAllTransactions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.TransactionFilter} returns this
 */
proto.pb.TransactionFilter.prototype.setAllTransactions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


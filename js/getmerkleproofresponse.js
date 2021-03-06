// source: bchrpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.pb.GetMerkleProofResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pb.BlockInfo');

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
proto.pb.GetMerkleProofResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetMerkleProofResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetMerkleProofResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetMerkleProofResponse.displayName = 'proto.pb.GetMerkleProofResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetMerkleProofResponse.repeatedFields_ = [2];



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
proto.pb.GetMerkleProofResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetMerkleProofResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetMerkleProofResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMerkleProofResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.pb.BlockInfo.toObject(includeInstance, f),
    hashesList: msg.getHashesList_asB64(),
    flags: msg.getFlags_asB64()
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
 * @return {!proto.pb.GetMerkleProofResponse}
 */
proto.pb.GetMerkleProofResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetMerkleProofResponse;
  return proto.pb.GetMerkleProofResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetMerkleProofResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetMerkleProofResponse}
 */
proto.pb.GetMerkleProofResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.BlockInfo;
      reader.readMessage(value,proto.pb.BlockInfo.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addHashes(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFlags(value);
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
proto.pb.GetMerkleProofResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetMerkleProofResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetMerkleProofResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMerkleProofResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.BlockInfo.serializeBinaryToWriter
    );
  }
  f = message.getHashesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getFlags_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional BlockInfo block = 1;
 * @return {?proto.pb.BlockInfo}
 */
proto.pb.GetMerkleProofResponse.prototype.getBlock = function() {
  return /** @type{?proto.pb.BlockInfo} */ (
    jspb.Message.getWrapperField(this, proto.pb.BlockInfo, 1));
};


/**
 * @param {?proto.pb.BlockInfo|undefined} value
 * @return {!proto.pb.GetMerkleProofResponse} returns this
*/
proto.pb.GetMerkleProofResponse.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GetMerkleProofResponse} returns this
 */
proto.pb.GetMerkleProofResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetMerkleProofResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bytes hashes = 2;
 * @return {!Array<string>}
 */
proto.pb.GetMerkleProofResponse.prototype.getHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes hashes = 2;
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<string>}
 */
proto.pb.GetMerkleProofResponse.prototype.getHashesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getHashesList()));
};


/**
 * repeated bytes hashes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.pb.GetMerkleProofResponse.prototype.getHashesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getHashesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.pb.GetMerkleProofResponse} returns this
 */
proto.pb.GetMerkleProofResponse.prototype.setHashesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.pb.GetMerkleProofResponse} returns this
 */
proto.pb.GetMerkleProofResponse.prototype.addHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetMerkleProofResponse} returns this
 */
proto.pb.GetMerkleProofResponse.prototype.clearHashesList = function() {
  return this.setHashesList([]);
};


/**
 * optional bytes flags = 3;
 * @return {string}
 */
proto.pb.GetMerkleProofResponse.prototype.getFlags = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes flags = 3;
 * This is a type-conversion wrapper around `getFlags()`
 * @return {string}
 */
proto.pb.GetMerkleProofResponse.prototype.getFlags_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFlags()));
};


/**
 * optional bytes flags = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFlags()`
 * @return {!Uint8Array}
 */
proto.pb.GetMerkleProofResponse.prototype.getFlags_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFlags()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.GetMerkleProofResponse} returns this
 */
proto.pb.GetMerkleProofResponse.prototype.setFlags = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bchrpc.proto

namespace Pb\Transaction;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pb.Transaction.Output</code>
 */
class Output extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 index = 1;</code>
     */
    protected $index = 0;
    /**
     * Generated from protobuf field <code>int64 value = 2;</code>
     */
    protected $value = 0;
    /**
     * Generated from protobuf field <code>bytes pubkey_script = 3;</code>
     */
    protected $pubkey_script = '';
    /**
     * Generated from protobuf field <code>string address = 4;</code>
     */
    protected $address = '';
    /**
     * Generated from protobuf field <code>string script_class = 5;</code>
     */
    protected $script_class = '';
    /**
     * Generated from protobuf field <code>string disassembled_script = 6;</code>
     */
    protected $disassembled_script = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $index
     *     @type int|string $value
     *     @type string $pubkey_script
     *     @type string $address
     *     @type string $script_class
     *     @type string $disassembled_script
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Bchrpc::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 index = 1;</code>
     * @return int
     */
    public function getIndex()
    {
        return $this->index;
    }

    /**
     * Generated from protobuf field <code>uint32 index = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setIndex($var)
    {
        GPBUtil::checkUint32($var);
        $this->index = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 value = 2;</code>
     * @return int|string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Generated from protobuf field <code>int64 value = 2;</code>
     * @param int|string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkInt64($var);
        $this->value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes pubkey_script = 3;</code>
     * @return string
     */
    public function getPubkeyScript()
    {
        return $this->pubkey_script;
    }

    /**
     * Generated from protobuf field <code>bytes pubkey_script = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPubkeyScript($var)
    {
        GPBUtil::checkString($var, False);
        $this->pubkey_script = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string address = 4;</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setAddress($var)
    {
        GPBUtil::checkString($var, True);
        $this->address = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string script_class = 5;</code>
     * @return string
     */
    public function getScriptClass()
    {
        return $this->script_class;
    }

    /**
     * Generated from protobuf field <code>string script_class = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setScriptClass($var)
    {
        GPBUtil::checkString($var, True);
        $this->script_class = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string disassembled_script = 6;</code>
     * @return string
     */
    public function getDisassembledScript()
    {
        return $this->disassembled_script;
    }

    /**
     * Generated from protobuf field <code>string disassembled_script = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setDisassembledScript($var)
    {
        GPBUtil::checkString($var, True);
        $this->disassembled_script = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Output::class, \Pb\Transaction_Output::class);

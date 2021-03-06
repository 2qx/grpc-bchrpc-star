<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bchrpc.proto

namespace Pb;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pb.BlockNotification</code>
 */
class BlockNotification extends \Google\Protobuf\Internal\Message
{
    /**
     * Whether the block is connected to the chain.
     *
     * Generated from protobuf field <code>.pb.BlockNotification.Type type = 1;</code>
     */
    protected $type = 0;
    protected $block;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $type
     *           Whether the block is connected to the chain.
     *     @type \Pb\BlockInfo $block_info
     *           Marshaled block header data, as well as metadata stored by the node.
     *     @type \Pb\Block $marshaled_block
     *           A Block.
     *     @type string $serialized_block
     *           Binary block, serialized using bitcoin protocol encoding.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Bchrpc::initOnce();
        parent::__construct($data);
    }

    /**
     * Whether the block is connected to the chain.
     *
     * Generated from protobuf field <code>.pb.BlockNotification.Type type = 1;</code>
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Whether the block is connected to the chain.
     *
     * Generated from protobuf field <code>.pb.BlockNotification.Type type = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkEnum($var, \Pb\BlockNotification\Type::class);
        $this->type = $var;

        return $this;
    }

    /**
     * Marshaled block header data, as well as metadata stored by the node.
     *
     * Generated from protobuf field <code>.pb.BlockInfo block_info = 2;</code>
     * @return \Pb\BlockInfo
     */
    public function getBlockInfo()
    {
        return $this->readOneof(2);
    }

    /**
     * Marshaled block header data, as well as metadata stored by the node.
     *
     * Generated from protobuf field <code>.pb.BlockInfo block_info = 2;</code>
     * @param \Pb\BlockInfo $var
     * @return $this
     */
    public function setBlockInfo($var)
    {
        GPBUtil::checkMessage($var, \Pb\BlockInfo::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * A Block.
     *
     * Generated from protobuf field <code>.pb.Block marshaled_block = 3;</code>
     * @return \Pb\Block
     */
    public function getMarshaledBlock()
    {
        return $this->readOneof(3);
    }

    /**
     * A Block.
     *
     * Generated from protobuf field <code>.pb.Block marshaled_block = 3;</code>
     * @param \Pb\Block $var
     * @return $this
     */
    public function setMarshaledBlock($var)
    {
        GPBUtil::checkMessage($var, \Pb\Block::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Binary block, serialized using bitcoin protocol encoding.
     *
     * Generated from protobuf field <code>bytes serialized_block = 4;</code>
     * @return string
     */
    public function getSerializedBlock()
    {
        return $this->readOneof(4);
    }

    /**
     * Binary block, serialized using bitcoin protocol encoding.
     *
     * Generated from protobuf field <code>bytes serialized_block = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setSerializedBlock($var)
    {
        GPBUtil::checkString($var, False);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getBlock()
    {
        return $this->whichOneof("block");
    }

}


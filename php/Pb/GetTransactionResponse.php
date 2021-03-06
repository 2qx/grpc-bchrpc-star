<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bchrpc.proto

namespace Pb;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pb.GetTransactionResponse</code>
 */
class GetTransactionResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * A marshaled transaction.
     *
     * Generated from protobuf field <code>.pb.Transaction transaction = 1;</code>
     */
    protected $transaction = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pb\Transaction $transaction
     *           A marshaled transaction.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Bchrpc::initOnce();
        parent::__construct($data);
    }

    /**
     * A marshaled transaction.
     *
     * Generated from protobuf field <code>.pb.Transaction transaction = 1;</code>
     * @return \Pb\Transaction
     */
    public function getTransaction()
    {
        return $this->transaction;
    }

    /**
     * A marshaled transaction.
     *
     * Generated from protobuf field <code>.pb.Transaction transaction = 1;</code>
     * @param \Pb\Transaction $var
     * @return $this
     */
    public function setTransaction($var)
    {
        GPBUtil::checkMessage($var, \Pb\Transaction::class);
        $this->transaction = $var;

        return $this;
    }

}


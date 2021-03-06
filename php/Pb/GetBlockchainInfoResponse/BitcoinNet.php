<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bchrpc.proto

namespace Pb\GetBlockchainInfoResponse;

use UnexpectedValueException;

/**
 * Bitcoin network types
 *
 * Protobuf type <code>pb.GetBlockchainInfoResponse.BitcoinNet</code>
 */
class BitcoinNet
{
    /**
     * Live public network with monetary value.
     *
     * Generated from protobuf enum <code>MAINNET = 0;</code>
     */
    const MAINNET = 0;
    /**
     * An isolated environment for automated testing.
     *
     * Generated from protobuf enum <code>REGTEST = 1;</code>
     */
    const REGTEST = 1;
    /**
     * A public environment where monetary value is agreed to be zero,
     * and some checks for transaction conformity are disabled.
     *
     * Generated from protobuf enum <code>TESTNET3 = 2;</code>
     */
    const TESTNET3 = 2;
    /**
     * Private testnets for large scale simulations (or stress testing),
     * where a specified list of nodes is used, rather than node discovery.
     *
     * Generated from protobuf enum <code>SIMNET = 3;</code>
     */
    const SIMNET = 3;

    private static $valueToName = [
        self::MAINNET => 'MAINNET',
        self::REGTEST => 'REGTEST',
        self::TESTNET3 => 'TESTNET3',
        self::SIMNET => 'SIMNET',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(BitcoinNet::class, \Pb\GetBlockchainInfoResponse_BitcoinNet::class);


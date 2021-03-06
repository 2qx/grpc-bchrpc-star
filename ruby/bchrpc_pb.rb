# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bchrpc.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("bchrpc.proto", :syntax => :proto3) do
    add_message "pb.GetMempoolInfoRequest" do
    end
    add_message "pb.GetMempoolInfoResponse" do
      optional :size, :uint32, 1
      optional :bytes, :uint32, 2
    end
    add_message "pb.GetMempoolRequest" do
      optional :full_transactions, :bool, 1
    end
    add_message "pb.GetMempoolResponse" do
      repeated :transaction_data, :message, 1, "pb.GetMempoolResponse.TransactionData"
    end
    add_message "pb.GetMempoolResponse.TransactionData" do
      oneof :txids_or_txs do
        optional :transaction_hash, :bytes, 1
        optional :transaction, :message, 2, "pb.Transaction"
      end
    end
    add_message "pb.GetBlockchainInfoRequest" do
    end
    add_message "pb.GetBlockchainInfoResponse" do
      optional :bitcoin_net, :enum, 1, "pb.GetBlockchainInfoResponse.BitcoinNet"
      optional :best_height, :int32, 2
      optional :best_block_hash, :bytes, 3
      optional :difficulty, :double, 4
      optional :median_time, :int64, 5
      optional :tx_index, :bool, 6
      optional :addr_index, :bool, 7
    end
    add_enum "pb.GetBlockchainInfoResponse.BitcoinNet" do
      value :MAINNET, 0
      value :REGTEST, 1
      value :TESTNET3, 2
      value :SIMNET, 3
    end
    add_message "pb.GetBlockInfoRequest" do
      oneof :hash_or_height do
        optional :hash, :bytes, 1
        optional :height, :int32, 2
      end
    end
    add_message "pb.GetBlockInfoResponse" do
      optional :info, :message, 1, "pb.BlockInfo"
    end
    add_message "pb.GetBlockRequest" do
      optional :full_transactions, :bool, 3
      oneof :hash_or_height do
        optional :hash, :bytes, 1
        optional :height, :int32, 2
      end
    end
    add_message "pb.GetBlockResponse" do
      optional :block, :message, 1, "pb.Block"
    end
    add_message "pb.GetRawBlockRequest" do
      oneof :hash_or_height do
        optional :hash, :bytes, 1
        optional :height, :int32, 2
      end
    end
    add_message "pb.GetRawBlockResponse" do
      optional :block, :bytes, 1
    end
    add_message "pb.GetBlockFilterRequest" do
      oneof :hash_or_height do
        optional :hash, :bytes, 1
        optional :height, :int32, 2
      end
    end
    add_message "pb.GetBlockFilterResponse" do
      optional :filter, :bytes, 1
    end
    add_message "pb.GetHeadersRequest" do
      repeated :block_locator_hashes, :bytes, 1
      optional :stop_hash, :bytes, 2
    end
    add_message "pb.GetHeadersResponse" do
      repeated :headers, :message, 1, "pb.BlockInfo"
    end
    add_message "pb.GetTransactionRequest" do
      optional :hash, :bytes, 1
    end
    add_message "pb.GetTransactionResponse" do
      optional :transaction, :message, 1, "pb.Transaction"
    end
    add_message "pb.GetRawTransactionRequest" do
      optional :hash, :bytes, 1
    end
    add_message "pb.GetRawTransactionResponse" do
      optional :transaction, :bytes, 1
    end
    add_message "pb.GetAddressTransactionsRequest" do
      optional :address, :string, 1
      optional :nb_skip, :uint32, 2
      optional :nb_fetch, :uint32, 3
      oneof :start_block do
        optional :hash, :bytes, 4
        optional :height, :int32, 5
      end
    end
    add_message "pb.GetAddressTransactionsResponse" do
      repeated :confirmed_transactions, :message, 1, "pb.Transaction"
      repeated :unconfirmed_transactions, :message, 2, "pb.MempoolTransaction"
    end
    add_message "pb.GetRawAddressTransactionsRequest" do
      optional :address, :string, 1
      optional :nb_skip, :uint32, 2
      optional :nb_fetch, :uint32, 3
      oneof :start_block do
        optional :hash, :bytes, 4
        optional :height, :int32, 5
      end
    end
    add_message "pb.GetRawAddressTransactionsResponse" do
      repeated :confirmed_transactions, :bytes, 1
      repeated :unconfirmed_transactions, :bytes, 2
    end
    add_message "pb.GetAddressUnspentOutputsRequest" do
      optional :address, :string, 1
      optional :include_mempool, :bool, 2
    end
    add_message "pb.GetAddressUnspentOutputsResponse" do
      repeated :outputs, :message, 1, "pb.UnspentOutput"
    end
    add_message "pb.GetUnspentOutputRequest" do
      optional :hash, :bytes, 1
      optional :index, :uint32, 2
      optional :include_mempool, :bool, 3
    end
    add_message "pb.GetUnspentOutputResponse" do
      optional :outpoint, :message, 1, "pb.Transaction.Input.Outpoint"
      optional :pubkey_script, :bytes, 2
      optional :value, :int64, 3
      optional :is_coinbase, :bool, 4
      optional :block_height, :int32, 5
    end
    add_message "pb.GetMerkleProofRequest" do
      optional :transaction_hash, :bytes, 1
    end
    add_message "pb.GetMerkleProofResponse" do
      optional :block, :message, 1, "pb.BlockInfo"
      repeated :hashes, :bytes, 2
      optional :flags, :bytes, 3
    end
    add_message "pb.SubmitTransactionRequest" do
      optional :transaction, :bytes, 1
    end
    add_message "pb.SubmitTransactionResponse" do
      optional :hash, :bytes, 1
    end
    add_message "pb.SubscribeTransactionsRequest" do
      optional :subscribe, :message, 1, "pb.TransactionFilter"
      optional :unsubscribe, :message, 2, "pb.TransactionFilter"
      optional :include_mempool, :bool, 3
      optional :include_in_block, :bool, 4
      optional :serialize_tx, :bool, 5
    end
    add_message "pb.SubscribeBlocksRequest" do
      optional :full_block, :bool, 1
      optional :full_transactions, :bool, 2
      optional :serialize_block, :bool, 3
    end
    add_message "pb.BlockNotification" do
      optional :type, :enum, 1, "pb.BlockNotification.Type"
      oneof :block do
        optional :block_info, :message, 2, "pb.BlockInfo"
        optional :marshaled_block, :message, 3, "pb.Block"
        optional :serialized_block, :bytes, 4
      end
    end
    add_enum "pb.BlockNotification.Type" do
      value :CONNECTED, 0
      value :DISCONNECTED, 1
    end
    add_message "pb.TransactionNotification" do
      optional :type, :enum, 1, "pb.TransactionNotification.Type"
      oneof :transaction do
        optional :confirmed_transaction, :message, 2, "pb.Transaction"
        optional :unconfirmed_transaction, :message, 3, "pb.MempoolTransaction"
        optional :serialized_transaction, :bytes, 4
      end
    end
    add_enum "pb.TransactionNotification.Type" do
      value :UNCONFIRMED, 0
      value :CONFIRMED, 1
    end
    add_message "pb.BlockInfo" do
      optional :hash, :bytes, 1
      optional :height, :int32, 2
      optional :version, :int32, 3
      optional :previous_block, :bytes, 4
      optional :merkle_root, :bytes, 5
      optional :timestamp, :int64, 6
      optional :bits, :uint32, 7
      optional :nonce, :uint32, 8
      optional :confirmations, :int32, 9
      optional :difficulty, :double, 10
      optional :next_block_hash, :bytes, 11
      optional :size, :int32, 12
      optional :median_time, :int64, 13
    end
    add_message "pb.Block" do
      optional :info, :message, 1, "pb.BlockInfo"
      repeated :transaction_data, :message, 2, "pb.Block.TransactionData"
    end
    add_message "pb.Block.TransactionData" do
      oneof :txids_or_txs do
        optional :transaction_hash, :bytes, 1
        optional :transaction, :message, 2, "pb.Transaction"
      end
    end
    add_message "pb.Transaction" do
      optional :hash, :bytes, 1
      optional :version, :int32, 2
      repeated :inputs, :message, 3, "pb.Transaction.Input"
      repeated :outputs, :message, 4, "pb.Transaction.Output"
      optional :lock_time, :uint32, 5
      optional :size, :int32, 8
      optional :timestamp, :int64, 9
      optional :confirmations, :int32, 10
      optional :block_height, :int32, 11
      optional :block_hash, :bytes, 12
    end
    add_message "pb.Transaction.Input" do
      optional :index, :uint32, 1
      optional :outpoint, :message, 2, "pb.Transaction.Input.Outpoint"
      optional :signature_script, :bytes, 3
      optional :sequence, :uint32, 4
      optional :value, :int64, 5
      optional :previous_script, :bytes, 6
      optional :address, :string, 7
    end
    add_message "pb.Transaction.Input.Outpoint" do
      optional :hash, :bytes, 1
      optional :index, :uint32, 2
    end
    add_message "pb.Transaction.Output" do
      optional :index, :uint32, 1
      optional :value, :int64, 2
      optional :pubkey_script, :bytes, 3
      optional :address, :string, 4
      optional :script_class, :string, 5
      optional :disassembled_script, :string, 6
    end
    add_message "pb.MempoolTransaction" do
      optional :transaction, :message, 1, "pb.Transaction"
      optional :added_time, :int64, 2
      optional :added_height, :int32, 3
      optional :fee, :int64, 4
      optional :fee_per_kb, :int64, 5
      optional :starting_priority, :double, 6
    end
    add_message "pb.UnspentOutput" do
      optional :outpoint, :message, 1, "pb.Transaction.Input.Outpoint"
      optional :pubkey_script, :bytes, 2
      optional :value, :int64, 3
      optional :is_coinbase, :bool, 4
      optional :block_height, :int32, 5
    end
    add_message "pb.TransactionFilter" do
      repeated :addresses, :string, 1
      repeated :outpoints, :message, 2, "pb.Transaction.Input.Outpoint"
      repeated :data_elements, :bytes, 3
      optional :all_transactions, :bool, 4
    end
  end
end

module Pb
  GetMempoolInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMempoolInfoRequest").msgclass
  GetMempoolInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMempoolInfoResponse").msgclass
  GetMempoolRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMempoolRequest").msgclass
  GetMempoolResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMempoolResponse").msgclass
  GetMempoolResponse::TransactionData = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMempoolResponse.TransactionData").msgclass
  GetBlockchainInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockchainInfoRequest").msgclass
  GetBlockchainInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockchainInfoResponse").msgclass
  GetBlockchainInfoResponse::BitcoinNet = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockchainInfoResponse.BitcoinNet").enummodule
  GetBlockInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockInfoRequest").msgclass
  GetBlockInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockInfoResponse").msgclass
  GetBlockRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockRequest").msgclass
  GetBlockResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockResponse").msgclass
  GetRawBlockRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawBlockRequest").msgclass
  GetRawBlockResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawBlockResponse").msgclass
  GetBlockFilterRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockFilterRequest").msgclass
  GetBlockFilterResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetBlockFilterResponse").msgclass
  GetHeadersRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetHeadersRequest").msgclass
  GetHeadersResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetHeadersResponse").msgclass
  GetTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetTransactionRequest").msgclass
  GetTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetTransactionResponse").msgclass
  GetRawTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawTransactionRequest").msgclass
  GetRawTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawTransactionResponse").msgclass
  GetAddressTransactionsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetAddressTransactionsRequest").msgclass
  GetAddressTransactionsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetAddressTransactionsResponse").msgclass
  GetRawAddressTransactionsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawAddressTransactionsRequest").msgclass
  GetRawAddressTransactionsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetRawAddressTransactionsResponse").msgclass
  GetAddressUnspentOutputsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetAddressUnspentOutputsRequest").msgclass
  GetAddressUnspentOutputsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetAddressUnspentOutputsResponse").msgclass
  GetUnspentOutputRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetUnspentOutputRequest").msgclass
  GetUnspentOutputResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetUnspentOutputResponse").msgclass
  GetMerkleProofRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMerkleProofRequest").msgclass
  GetMerkleProofResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.GetMerkleProofResponse").msgclass
  SubmitTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.SubmitTransactionRequest").msgclass
  SubmitTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.SubmitTransactionResponse").msgclass
  SubscribeTransactionsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.SubscribeTransactionsRequest").msgclass
  SubscribeBlocksRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.SubscribeBlocksRequest").msgclass
  BlockNotification = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.BlockNotification").msgclass
  BlockNotification::Type = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.BlockNotification.Type").enummodule
  TransactionNotification = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.TransactionNotification").msgclass
  TransactionNotification::Type = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.TransactionNotification.Type").enummodule
  BlockInfo = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.BlockInfo").msgclass
  Block = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Block").msgclass
  Block::TransactionData = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Block.TransactionData").msgclass
  Transaction = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Transaction").msgclass
  Transaction::Input = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Transaction.Input").msgclass
  Transaction::Input::Outpoint = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Transaction.Input.Outpoint").msgclass
  Transaction::Output = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.Transaction.Output").msgclass
  MempoolTransaction = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.MempoolTransaction").msgclass
  UnspentOutput = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.UnspentOutput").msgclass
  TransactionFilter = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("pb.TransactionFilter").msgclass
end

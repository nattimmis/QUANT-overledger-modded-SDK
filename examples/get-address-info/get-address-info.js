const OverledgerSDK = require("../../packages/bundle").default;

//  ---------------------------------------------------------
//  -------------- BEGIN VARIABLES TO UPDATE ----------------
//  ---------------------------------------------------------
const mappId = 'network.quant.examples.get-address-info';
const bpiKey = 'DkucSXHTIKsNoT7EX9kfpvkVyorhSoa4odHLnYS-3f0';

const ethereumAddress = '0x8661C6a3A44862498aB944C921858A5faDa931A7';
const rippleAddress = 'rJR7t9RDQupG5BbHramSKVcQH6jfpNdrxK';

//  ---------------------------------------------------------
//  -------------- END VARIABLES TO UPDATE ------------------
//  ---------------------------------------------------------

; (async () => {
    try {
        const overledger = new OverledgerSDK(mappId, bpiKey, {
            dlts: [{ dlt: "bitcoin" }, { dlt: 'ethereum' }, { dlt: 'ripple' }],
            // TODO: Set this to 'testnet' once the release is live
            provider: { network: 'http://10.7.4.236:30020/v1' },

        });

        const ethereumAddressBalance = await overledger.dlts.ethereum.getBalance(ethereumAddress);
        console.log('Ethereum address balance:\n', ethereumAddressBalance.data);
        console.log('\n');

        const rippleAddressBalance = await overledger.dlts.ripple.getBalance(rippleAddress);
        console.log('Ripple address balance:\n', rippleAddressBalance.data);
        console.log('\n');

        const ethereumAddressSequence = await overledger.dlts.ethereum.getSequence(ethereumAddress);
        console.log('Ethereum address sequence:\n', ethereumAddressSequence.data);
        console.log('\n');

        const rippleAddressSequence = await overledger.dlts.ripple.getSequence(rippleAddress);
        console.log('Ripple address sequence:\n', rippleAddressSequence.data);
        console.log('\n');

    } catch (e) {
        console.error('error', e.response.data);
    }
})();
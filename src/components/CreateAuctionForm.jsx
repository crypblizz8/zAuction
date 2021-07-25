import {  } from "@zoralabs/zdk";
import { MintButton } from "../styles/header";
import { useZora } from "../utils/ZoraProvider";

function CreateAuctionForm() {
    const { zora, address, auctionHouse } = useZora();

    const createAuction = async () => {

        const approvalTx = await zora.approve(auctionHouse.auctionHouse.address, 3498)
        const txWait = await approvalTx.wait()
        console.log('approvalTx txWait', txWait);

        const createAuctionTx = await auctionHouse.createAuction(3498, 10000, 100, '0x32F570BDEE7dD09F90f4b82185563109F0452be0', 10, "0x0000000000000000000000000000000000000000")
        const receipt = await createAuctionTx.wait();
        const auction = await auctionHouse.fetchAuctionFromTransactionReceipt(receipt);
        console.log('auctionReceipt auction', auction);

    }

    return (
        <div style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:16}}>
            <MintButton style={{ width: 150 }} onClick={createAuction}> Create </MintButton>
        </div>
    )
}
    
export default CreateAuctionForm;

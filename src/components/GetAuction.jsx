// import { AuctionHouse, Zora } from '@zoralabs/zdk'
// import { Wallet } from 'ethers'
import { constructBid } from "@zoralabs/zdk";
import { ConnectButton, MintButton } from "../styles/header";
import { useZora } from "../utils/ZoraProvider";

function GetAuction() {
    const { zora, address, auctionHouse } = useZora();

    // ToDo: Fix / get it to work?
    const getAuction = async () => {
        const AuctionTx = await auctionHouse.fetchAuction(3496)
        console.log('AuctionTx', AuctionTx);
    }

    const approveAuction = async () => {
        const test = await auctionHouse.setAuctionApproval(3496, true)
        console.log('AuctionTx', test);
    }

    return (
        <div style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:16}}>
            <ConnectButton style={{ width: 150 }}  onClick={approveAuction}> Get Auction ID </ConnectButton>
        </div>
    )
}
    
export default GetAuction;

import { useCallback, useRef } from "react";
import { MintButton } from "../styles/header";
import { useZora } from "../utils/ZoraProvider";
import { InputField, MintForm } from "../styles/form";

function CreateAuctionForm() {
  const { zora, auctionHouse } = useZora();

  // Form Refs
  const tokenRef = useRef();
  const curatorRef = useRef();
  const durationRef = useRef();
  const royaltiesRef = useRef();
  const priceRef = useRef();

  const handleFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const token = tokenRef.current.value;
        const curator = curatorRef.current.value;
        const duration = durationRef.current.value;
        const royalties = royaltiesRef.current.value;
        const price = priceRef.current.value;

        console.log("handleForm tolen", token);
        console.log("handleForm curator", curator);
        console.log("handleForm duration", duration);
        console.log("handleForm royalties", royalties);
        console.log("handleForm price", price);

        const approvalTx = await zora.approve(
          auctionHouse.auctionHouse.address,
          token
        );
        const txWait = await approvalTx.wait();
        console.log("approvalTx txWait", txWait);

        const createAuctionTx = await auctionHouse.createAuction(
          token,
          duration,
          price,
          curator,
          royalties,
          "0x0000000000000000000000000000000000000000"
        );
        const receipt = await createAuctionTx.wait();
        const auction = await auctionHouse.fetchAuctionFromTransactionReceipt(
          receipt
        );
        console.log("auctionReceipt auction", auction);
      } catch (e) {
        console.log(e);
      }
    },
    [zora, auctionHouse]
  );

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      <MintForm onSubmit={handleFormSubmit}>
        <InputField defaultValue="" placeholder="Token ID" ref={tokenRef} />
        <InputField
          defaultValue=""
          placeholder="Curator Address"
          ref={curatorRef}
        />
        <InputField
          defaultValue=""
          placeholder="Royalty Split"
          ref={royaltiesRef}
        />
        <InputField defaultValue="" placeholder="Duration" ref={durationRef} />
        <InputField defaultValue="" placeholder="Bid" ref={priceRef} />
        <MintButton style={{ width: 150 }} onSubmit={() => handleFormSubmit()}>
          {" "}
          Create{" "}
        </MintButton>
      </MintForm>
    </div>
  );
}

export default CreateAuctionForm;

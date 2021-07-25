import { useCallback, useRef, useState } from "react";
import { ContainerRow } from "../styles/globals";
import { InputField, MintForm, TwoColLayout  } from "../styles/form";
import CreateAuctionForm  from "./CreateAuctionForm";
import GetAuction  from "./GetAuction";
import { useZora } from "../utils/ZoraProvider";
import { constructBidShares, constructMediaData, sha256FromBuffer, generateMetadata } from '@zoralabs/zdk';
import { SubmitButton } from "../styles/header";

function Mint() {
    const { zora } = useZora();
  
    // Form Refs
    const nameRef = useRef();
    const descriptionRef = useRef();
    const fileRef = useRef();
  
    const handleFormSubmit = useCallback(
        async event => {
        event.preventDefault();
        try {
          const name = nameRef.current.value;
          const description = descriptionRef.current.value;
          const file = fileRef.current.files[0];

          const { metadataHash, metadataURI } = await generateAndUploadMetadata(name, description);
          const { fileURI, fileHash } = await generateAndUploadToken(file);
          const mediaData = constructMediaData(fileURI, metadataURI, fileHash, metadataHash);
          const bidShares = constructBidShares(10, 90, 0);

          const tx = await zora.mint(mediaData, bidShares);
          console.log('tx', tx);
          const mint = await tx.wait(8);
        } catch (e) {
            console.log(e);
        } 
        },
        [zora]
    );

    const form = (
      <MintForm onSubmit={handleFormSubmit}>
          <InputField defaultValue="Name" placeholder="Title" ref={nameRef}/>
          <InputField defaultValue="Description" placeholder="Description" ref={descriptionRef}/>
          <InputField defaultValue="" type="file" ref={fileRef}/>
          <SubmitButton type="submit"> Submit </SubmitButton>
      </MintForm>
    )
  
  
  const leftCol = (
    <TwoColLayout>
        <h2>Create your NFT</h2>
        {form}
    </TwoColLayout>
  )

  const rightCol = (
    <TwoColLayout>
      <h2 style={{padding: 0, marginTop: 24}}>Create Auction</h2>
        <CreateAuctionForm />
      <h2 style={{padding: 0, marginTop: 48}}>Get Auction Id</h2>
        <GetAuction/>
    </TwoColLayout>
  )

    return (
      <ContainerRow>
        {leftCol}
        {rightCol}
      </ContainerRow>
    );
}

// Upload MetaData to Cloudinary
async function generateAndUploadMetadata(name, description) {
  const formData = new FormData();
  const metadata = {
    name,
    description,
    mimeType: 'text/plain',
    version: 'zora-20210101',
  };
  formData.append(
    'file',
    new File([JSON.stringify(metadata)], 'metadata.json', {
      type: 'text/plain',
    })
  );
  formData.append('upload_preset', 'zoratest')

  console.log('formData2', formData);

  const res = await fetch("	https://api.cloudinary.com/v1_1/zauction/raw/upload/", {
    method: 'POST',
    body: formData
  })

  const json = await res.json();
  const metadataURI = json.secure_url;
  const metadataHash = sha256FromBuffer(Buffer.from(metadataURI));

  return { metadataHash, metadataURI };
}

// Upload MetaData to Cloudinary
async function generateAndUploadToken(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'zoratest')

  const res = await fetch("	https://api.cloudinary.com/v1_1/zauction/raw/upload/", {
    method: 'POST',
    body: formData
  })

  const fileRes = await res.json();
  const fileURI = fileRes.secure_url;
  const fileHash = sha256FromBuffer(Buffer.from(fileURI));
  
  return { fileURI, fileHash };
}


export default Mint;

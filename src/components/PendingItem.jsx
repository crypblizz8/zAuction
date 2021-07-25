import { useCallback, useRef, useState } from "react";
import { SubmitButton, HideButton, ConnectButton } from "../styles/header";
import { FlipCardContainer, ListItemContainer, ListItemImage, } from "../styles/listItems";

const PendingContent = ({data}) => {

    const [flipped, setFlipped] = useState(false);


    const frontCard = () => {
        return (
        <FlipCardContainer onClick={() => setFlipped(!flipped)}>
            <ListItemImage src={data.contentUri} />
            <div style={{padding: 8}}>
                <p>{data.title}</p>
                <p>@{data.creator}</p>
            </div>
            <div style={{padding: 4, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <HideButton>
                    Reject
                </HideButton>
                <SubmitButton>
                    Approve
                </SubmitButton>
            </div>
        </FlipCardContainer>
        )
    }

    const backCard = () => {
        return (
            <FlipCardContainer onClick={() => setFlipped(!flipped)}>
                <ListItemImage src="https://zora.imgix.net/bafybeiclcqee6t2tzm7bvgkg6urgwu434oh6l3bw2bxu5okdqhiwj37emi?fit=clip&fm=webp&q=60&w=480" />
                <div style={{padding: 8}}>
                    <p>@{data.creator}</p>
                    <p>{data.description}</p>
                </div>
                <div style={{padding: 8, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <HideButton>
                        Reject
                    </HideButton>
                    <SubmitButton>
                        Approve
                    </SubmitButton>
                </div>
        </FlipCardContainer>
        )
    }

    return (
        <ListItemContainer>
            {/* <ConnectButton onClick={() => setFlipped(!flipped)}/> */}
            {!flipped ? frontCard():  backCard()}
        </ListItemContainer>
    )
}

export default PendingContent;

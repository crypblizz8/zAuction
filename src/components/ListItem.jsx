// import { useCallback, useRef, useState } from "react";
import { SubmitButton, HideButton, ConnectButton } from "../styles/header";
import { FlipCardContainer, ListItemContainer, ListItemImage,ListBottomContainer } from "../styles/listItems";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

const PendingContent = ({ data }) => {
    
    // const history = useHistory();
    const testURL = 'media'
    const { url, path } = useRouteMatch()

    // function mediaNavigation() {
    //     history.push("/media");
    // }

    const frontCard = () => {
        return (
            <FlipCardContainer>
                <Link to={`${testURL}/${data._id}`} style={{textDecoration: 'none', color: 'black'}} >
                    <ListItemImage src={data.contentUri} />
                    <div style={{padding: 8}}>
                        <p style={{fontWeight: 600}}>{data.title}</p>
                        <p>@{data.creator}</p>
                    </div>
                    <ListBottomContainer>
                        <p style={{fontWeight: 600}}>Proposed Price</p>
                        <p>{data.bid} ETH</p>
                    </ListBottomContainer>
                </Link>
            </FlipCardContainer>
        )
    }

    return (
        <ListItemContainer>
            {frontCard()}
        </ListItemContainer>
    )
}

export default PendingContent;

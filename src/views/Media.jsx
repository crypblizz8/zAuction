import { useEffect, useState } from "react";
import { ContainerColLeftAlign, ContainerFlex, ContainerCol, ContainerRow, ContainerColRightAlign} from "../styles/globals";
import { MediaItemImage } from "../styles/listItems";
import { BrowserRouter as Router, Route, useLocation, useParams, useRouteMatch} from "react-router-dom";
import { MediaGreyContainer } from "../styles/media";
import approvalData from "../utils/dummyData";
import { FullWidthButton, FullWidthWhiteButton } from "../styles/header";

function Media() {
    const {id} = useParams()
    const { path, url } = useRouteMatch();
    const { pathname } = useLocation();
    const [data, setData] = useState();

    useEffect(() => {
        approvalData.map((ele, ind) => {
            if (ele._id == id) {
                setData(ele);
            }
        }) 
    }, [id])

    const mediaContent = () => {
        return (
            <MediaGreyContainer>
                { data ? <MediaItemImage src={data.contentUri}/> : null}
            </MediaGreyContainer>
        )
    }

    const mediaDescription = () => {
        if (!data) { return; }

        return (
            <ContainerColLeftAlign style={{
                height: "60vh", paddingLeft: '10em', width: '50%', paddingTop: '4em'
            }}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>Creator: @{data.creator}</p>
                <p>Reserve Price: {data.bid} ETH</p>
                <ContainerRow>
                <FullWidthWhiteButton>
                    Reject
                </FullWidthWhiteButton>
                <FullWidthButton>
                    Approve
                </FullWidthButton>
                </ContainerRow>
            </ContainerColLeftAlign>
        )
    }

    const approveButtons = () => {
        if (!data) { return; }

        return (
            <ContainerCol>
                <FullWidthButton>
                    Approve
                </FullWidthButton>
            </ContainerCol>
        )
    }

    return (
        <ContainerFlex>
            <Route path={`${pathname}`} />
            {mediaContent()}
            <ContainerRow>
                {mediaDescription()}
                {/* {approveButtons()} */}
            </ContainerRow>
        </ContainerFlex>
    );
}

export default Media;

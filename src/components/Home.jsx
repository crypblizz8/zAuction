import { ContainerCol } from "../styles/globals";
import { useState } from "react";
import { Tabs, Tab, Content } from "../styles/tabs";
import ApprovalContent from "./ApprovalContent";
import PendingContent from "./PendingContent";

function Home() {
    const [active, setActive] = useState(0);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    const tabContent = () => {
        return (
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                    Approve
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                    Pending
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                    Past
                </Tab>
            </Tabs>
        )
    }

    const content = () => {
        return (
        <>
            <Content active={active === 0}>
                <ApprovalContent/>
            </Content>
            <Content active={active === 1}/>
            <Content active={active === 2}/>
        </>
        )
    }

  return (
    <ContainerCol>
        {tabContent()}
        {content()}
    </ContainerCol>
  );
}

export default Home;

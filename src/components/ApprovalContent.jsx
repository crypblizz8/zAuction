// import { SubmitButton, HideButton } from "../styles/header";
import {  ListItemRowContainer} from "../styles/listItems";
import ListItem from './ListItem';
import approvalData from '../utils/dummyData';

const ApprovalContent = () => {
    return (
        <ListItemRowContainer>
            {approvalData.map((e) => {
                return (
                    <ListItem data = { e }/>
                )
            })}
            {/* <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/> */}
        </ListItemRowContainer>
    )
}

export default ApprovalContent;

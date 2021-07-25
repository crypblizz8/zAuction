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
        </ListItemRowContainer>
    )
}

export default ApprovalContent;

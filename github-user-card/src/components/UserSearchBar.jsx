import React from 'react'
import { 
    InputGroup, 
    InputGroupAddon,
    Button, 
    Input 
} from 'reactstrap';

class UserSearchBar extends React.Component{
    render(){
        return (
            <div>
                <InputGroup>
                    <Input 
                        placeholder="github username..."
                        value={this.props.searchText}
                        onChange={e => this.props.updateSearchText(e.target.value)}/>
                    <InputGroupAddon addonType="append">
                        <Button onClick={() => this.props.findUser()} color="secondary" outline>Find User</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default UserSearchBar
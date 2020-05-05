import React from 'react'
import { 
    Card,
    CardBody,
    CardTitle, 
    CardText, 
    CardLink,
    CardImg 
} from 'reactstrap';

const GithubUserCard = props => {
    const {userInfo} = props

    return (
        <div>
            <Card className="user-card">
                <CardImg className="user-img" top width="100%" src={userInfo.avatar_url} alt={userInfo.name}/>
                <CardBody>
                    <CardTitle>{userInfo.name}</CardTitle>
                    <CardText>{userInfo.bio}</CardText>
                    <CardText>Followers: {userInfo.followers}</CardText>
                    <CardLink href={userInfo.html_url}>User Profile</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default GithubUserCard
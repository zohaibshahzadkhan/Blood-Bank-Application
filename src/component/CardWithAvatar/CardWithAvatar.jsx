
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardWithAvatar = () => (
  <Card>
    <CardHeader
      title="Zohaib Shahzad Khan"
      subtitle="Developer"
      avatar="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/18056919_10208632079310768_2437756440794553780_n.jpg?oh=46db2cd93ce402ccfd850939e5ef5b91&oe=59924AB2"
    />
    <CardMedia
      overlay={<CardTitle title="Promote Blood Donation" subtitle="Donation of Blood means a few minutes to you but a lifetime for somebody else" />}
    >
      <img src="http://roysdelivery.com/wp-content/uploads/2014/07/t1.jpg" />
    </CardMedia>
    <CardTitle title="A life may depend on a gesture from you, a bottle of Blood" />
    <CardText>
      Do you feel you don’t have much to offer? You have the most precious resource of all
      the ability to save a life by donating blood! Help share this invaluable gift with someone in need
    </CardText>
  </Card>
);

export default CardWithAvatar;
import React, { useState } from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button,
  CardHeader
} from 'reactstrap';

const DetailsCard = (props) => {

    const detailsStyle = {
      fontSize: "Small"
    }


    const [cardData, setCardData] = useState({
        name: "Colegio Carmen Serdán",
        users: 40,
        creditCard: 4080,
        cardType: "Master Card",
        tier: 3,
        contact: "Alberto Hernández",
        phone: "+52 2225 771942",
        address: "Av. Unidad Deportiva 2047",
        city: "Puebla",
        country: "México"
      });

  return (
    <div className="mt-3">
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <CardTitle tag="h5" className="mb-0">School Details</CardTitle>
          <Button>Edit</Button>
        </CardHeader>
        <CardBody className="p-0">
        <ul className="list-group list-group-flush">
            <li className="list-group-item" style={detailsStyle}> School Name: {cardData.name}</li>
            <li className="list-group-item" style={detailsStyle}> Users: {cardData.users} </li>
            <li className="list-group-item" style={detailsStyle}> Credit Card: {cardData.cardType}, {cardData.creditCard}</li>
            <li className="list-group-item" style={detailsStyle}> Tier: {cardData.tier}</li>
            <li className="list-group-item" style={detailsStyle}> Contact: {cardData.contact}</li>
            <li className="list-group-item" style={detailsStyle}> Phone: {cardData.phone}</li>
            <li className="list-group-item" style={detailsStyle}> Address: {cardData.address}</li>
            <li className="list-group-item" style={detailsStyle}> City: {cardData.city} </li>
            <li className="list-group-item" style={detailsStyle}> Country: {cardData.country}</li>     
        </ul>   
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailsCard;
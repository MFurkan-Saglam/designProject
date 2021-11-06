import React from 'react'
import  { useState } from "react"; //rfc diyip enterladık bu hazır snippetı kurdu.
import { Grid, GridRow } from "semantic-ui-react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router";
import Category from './Category';
import PhotoGrid from '../pages/PhotoGrid';
import Modal from '../pages/Modal';


export default function Dashboard() {

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <div>
        <ToastContainer position="bottom-left" />
        <Grid>
            <Grid.Row>
                <Grid.Column width="3">
                    <Category/>
                </Grid.Column>
                <Grid.Column width="13">
                    <PhotoGrid setSelectedPhoto={setSelectedPhoto}/>
                    { selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} /> }
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        </div>
    )
}
/*

        */
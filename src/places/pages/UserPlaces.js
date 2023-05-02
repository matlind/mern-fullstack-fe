import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire state building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/95.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat:40.7484405,
            lng:-73.9856644
            
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'The Shard',
        description: 'One of the tallest building in Europe',
        imageUrl: 'https://media.istockphoto.com/id/482667566/photo/the-shard.jpg?s=612x612&w=0&k=20&c=If0cCaV6N6BG0WDj0KRkpzok22KED5EPonhRW5lD69Q=',
        address: '32 London Bridge St, London SE1 9SG',
        location: {
            lat:51.5045,
            lng:-0.0865
            
        },
        creator:'u2'

    }

]


const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />}

export default UserPlaces;
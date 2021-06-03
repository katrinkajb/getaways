require('dotenv').config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Getaways from './Getaways';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places', (req, res, ctx) => {
        return res(ctx.json(
            [
                {
                "id": "60ac55a713f85d2a6af9a1ff",
                "name": "Licensed Cloned Hotel",
                "slug": "licensed-cloned-hotel",
                "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                "location": "23804 Douglas Port, Watsonmouth, New Mexico, 66770-0496",
                "price_per_night": 336,
                "image": "http://placeimg.com/1080/800/nature",
                "image_thumbnail": "http://placeimg.com/400/400/nature",
                "max_guests": 10,
                "pet_friendly": true,
                "pool": true,
                "wifi": true,
                "createdAt": "2021-05-25T01:40:55.167Z",
                "updatedAt": "2021-05-30T17:20:07.393Z",
                "__v": 0
                },
                {
                "id": "60ac55a713f85d2a6af9a200",
                "name": "Sleek Ameliorated Zoo",
                "slug": "sleek-ameliorated-zoo",
                "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                "location": "31895 Rosenbaum Stream, Antelope, Louisiana, 98099",
                "price_per_night": 387,
                "image": "http://placeimg.com/1080/800/nightlife",
                "image_thumbnail": "http://placeimg.com/400/400/nightlife",
                "max_guests": 23,
                "pet_friendly": false,
                "pool": false,
                "wifi": true,
                "createdAt": "2021-05-25T01:40:55.167Z",
                "updatedAt": "2021-05-30T16:52:11.079Z",
                "__v": 0
                }
            ]
        ))
    })
)

describe('Getaways container', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('renders the app on the page', () => {
        render(
            <MemoryRouter>
                <Getaways />
            </MemoryRouter>)
        screen.getByText('Loading...');

        return waitFor(() => {
            screen.getByRole('list');

            screen.getByRole('button', { name: 'prevButton' });
            screen.getByRole('button', { name: 'nextButton' });
        })
    })
})

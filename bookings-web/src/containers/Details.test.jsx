require('dotenv').config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import Details from './Details';

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/60ac55a713f85d2a6af9a1ff', (req, res, ctx) => {
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
                }
            ]
        ))
    })
)

describe('Details container', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('renders details page', () => {
        render(
            <MemoryRouter>
                <Details />
            </MemoryRouter>)

        screen.getByText('Loading...');

        // return waitFor(() => {
        //     screen.getByText('Licensed Cloned Hotel');
        // })
    })
})

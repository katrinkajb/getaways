import React from 'react';
import { render } from '@testing-library/react';
import Getaways from './Getaways';

describe('Getaways test', async () => {
    it('renders the app to the page', () => {
        render(<Getaways />)

        const ul = await screen.findByRole('list', {name: 'places'});
    })
})

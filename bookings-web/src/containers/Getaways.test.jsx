import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Getaways from './Getaways';

describe('Getaways Container', () => {
    it('displays the list of places', async () => {
        render(
            <Getaways />
        );
        const ul = await screen.findByRole('list', { name: 'places' });
        // return waitFor(() => {
        //     expect(ul).toEqualSnapshot();
        // })
    })
})

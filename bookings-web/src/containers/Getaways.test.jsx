import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Getaways from './Getaways';

describe('Getaways Container', () => {
    it('displays the list of places', async () => {
        render(
            <Getaways />
        );
        return waitFor(async () => {
            const ul = await screen.findByRole('list', { name: 'places' });
            expect(ul).toEqualSnapshot();
        })
    })
})

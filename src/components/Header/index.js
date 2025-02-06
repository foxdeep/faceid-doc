import React from 'react';
import Link from '@docusaurus/Link';

import { Stack } from '@mui/material';

import Login from '@site/static/img/header.svg';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Header() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Stack spacing={2} direction='row' m={2} alignItems='center'>
            <Stack spacing={2} alignItems='flex-start' width={'100%'}>
                <h1><Translate id='header.title'>{siteConfig.title}</Translate></h1>
                <p>
                    <Translate id='header.subTitle'>
                        {siteConfig.tagline}
                    </Translate>
                </p>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    <Translate id='header.btn'>
                        Get Started
                    </Translate>
                </Link>
            </Stack>
            <Stack alignItems='center' justifyContent='center' width={'100%'}>
                <Login />
            </Stack>
        </Stack>
    )
}
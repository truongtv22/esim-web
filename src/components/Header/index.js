import React from 'react';
import PropTypes from 'prop-types';

import dynamic from 'next/dynamic';

import { createStyles, Menu, Center, Header, Container, Group, Button, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

import { Link, withTranslation } from 'utils/with-i18next';

const SelectLanguages = dynamic(() => import('./SelectLanguages'), { ssr: false });

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color: theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).color,
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const links = [
  {
    link: '/',
    key: 'header.home',
  },
  {
    link: '/pricing',
    key: 'header.pricing',
  },
  {
    link: '/about',
    key: 'header.about',
  },
];

export function AppHeader({ t }) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map(link => {
    const menuItems = link.links?.map(item => <Menu.Item key={item.link}>{t(link.key)}</Menu.Item>);

    if (menuItems) {
      return (
        <Menu key={link.key} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a href={link.link} className={classes.link} onClick={event => event.preventDefault()}>
              <Center>
                <span className={classes.linkLabel}>{t(link.key)}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.key} href={link.link}>
        <a className={classes.link}>{t(link.key)}</a>
      </Link>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <MantineLogo size={28} />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <Button radius="xl" sx={{ height: 30 }}>
            Get early access
          </Button>
          <SelectLanguages t={t} />
        </Group>
      </Container>
    </Header>
  );
}

AppHeader.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('common')(AppHeader);

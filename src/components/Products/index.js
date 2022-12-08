import React from 'react';

import {
  Badge,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  createStyles,
} from '@mantine/core';

import { Link, withTranslation } from 'utils/with-i18next';

const products = [
  {
    id: 1,
    name: 'United States',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/eeuu-1570112424383.jpg',
    price: 29,
  },
  {
    id: 2,
    name: 'Japan',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/japon-1570112732085.jpg',
    price: 29,
  },
  {
    id: 3,
    name: 'China',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/china-1570112215068.jpg',
    price: 27,
  },
  {
    id: 4,
    name: 'Canada',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/eeuu-1570112424383.jpg',
    price: 49,
  },
  {
    id: 5,
    name: 'Mexico',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/mexico-1570113036818.jpg',
    price: 29,
  },
  {
    id: 6,
    name: 'Thailand',
    image: 'https://cdn.shopify.com/s/files/1/2347/1879/t/14/assets/tailandia-1570113641142.jpg',
    price: 29,
  },
];

const useStyles = createStyles(theme => ({
  item: {
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export function Products(props) {
  const { classes } = useStyles();

  const renderProduct = product => (
    <Link key={product.id} href="/products/esim-usa">
      <Card shadow="sm" p="lg" radius="md" withBorder className={classes.item}>
        <Card.Section>
          <Image src={product.image} height={160} alt={product.name} />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{product.name}</Text>
          <Badge color="pink" variant="light">
            {`$${product.price}`}
          </Badge>
        </Group>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" uppercase>
          Buy now
        </Button>
      </Card>
    </Link>
  );

  return (
    <Stack spacing="xl" mt="xl">
      <Center>
        <Flex direction="column" align="center">
          <Title>For which destination do you want your card?</Title>
          <Text>{"Don't run out of data on your trip. Order it and sail at full speed wherever you go."}</Text>
        </Flex>
      </Center>
      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}>
        {products.map(renderProduct)}
      </SimpleGrid>
      <Center>
        <Link href="/products">
          <Button>More products</Button>
        </Link>
      </Center>
    </Stack>
  );
}

Products.propTypes = {};

export default withTranslation('common')(Products);

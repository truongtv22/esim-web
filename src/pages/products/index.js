import React from 'react';

import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Input,
  SimpleGrid,
  Text,
  createStyles,
  Stack,
  Title,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';

import { Link } from 'utils/with-i18next';

import Layout from 'components/Layout';

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

export function ProductsPage() {
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
    <Layout>
      <Stack spacing={48}>
        <Center>
          <Stack spacing="xl">
            <Title>All products for travelers</Title>
            <Input size="md" radius="xl" icon={<IconSearch size={18} />} />
          </Stack>
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
      </Stack>
    </Layout>
  );
}

export default ProductsPage;

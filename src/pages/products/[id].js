import React from 'react';

import { Box, Flex, Grid, Group, Image, List, Paper, SimpleGrid, Tabs, Text, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons';

import Layout from 'components/Layout';

const general = [
  { title: 'Unlimited cellular data connection in Vietnam.' },
  { title: 'Receive your QR code and activate it instantly.' },
  { title: 'Easy to set up. No registrations or subscriptions.' },
  { title: 'Keep your WhatsApp number on your cellphone.' },
  { title: '24/7 customer service in English.' },
  { title: 'Forget about roaming or searching for public WiFi networks.' },
];

export function ProductPage({ product }) {
  return (
    <Layout>
      <Image
        src="https://cdn-esimholafly2.pressidium.com/wp-content/uploads/2021/02/esim-vietnam.jpg"
        alt="Vietnam"
        width={200}
      />
      <Text>International travel eSIM for</Text>
      <Title>Vietnam</Title>
      <Text>$19.00</Text>
      <Paper shadow="sm">
        <Tabs defaultValue="general">
          <Tabs.List>
            <Tabs.Tab value="general">
              <Text fw="bold">General</Text>
            </Tabs.Tab>
            <Tabs.Tab value="description">
              <Text>Description</Text>
            </Tabs.Tab>
            <Tabs.Tab value="specification">
              <Text>Technical Specs</Text>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="general" p="md">
            <div className="columns-2">
              {general.map(item => (
                <Flex key={item.title}>
                  <IconCircleCheck />
                  <Text>{item.title}</Text>
                </Flex>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="description" p="md">
            Description tab content
          </Tabs.Panel>
          <Tabs.Panel value="specification" p="md">
            Technical Specs tab content
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: 'esim-usa' } }],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   return {
//     props: { product: { id: 1 } },
//   };
// }

export default ProductPage;

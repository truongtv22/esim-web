import React from 'react';
import PropTypes from 'prop-types';

import { Center, Flex, Input, Text, Title } from '@mantine/core';
import { IconDeviceMobile, IconHeadset, IconLifebuoy, IconSearch } from '@tabler/icons';

import { withTranslation } from 'utils/with-i18next';

export function Banner({ t }) {
  return (
    <Flex direction="column" gap={46}>
      <Center>
        <Flex direction="column" gap="lg">
          <Flex direction="column" align="center">
            <Text fz="xl">{"Don't pay for roaming anymore"}</Text>
            <Title>{'Internet wherever you travel'}</Title>
          </Flex>
          <Input size="md" radius="xl" icon={<IconSearch size={18} />} placeholder={'Where do you need internet?'} />
        </Flex>
      </Center>
      <Flex direction={{ base: 'column', sm: 'row' }} className="p-10 rounded-lg bg-gray-100">
        <Flex gap="sm" className="px-10">
          <div>
            <IconHeadset size={36} />
          </div>
          <Text>You keep your WhatsApp in Spanish.</Text>
        </Flex>
        <Flex gap="sm" className="px-10">
          <div>
            <IconLifebuoy size={36} />
          </div>
          <Text>Help in Spanish 24 hours a day.</Text>
        </Flex>
        <Flex gap="sm" className="px-10">
          <div>
            <IconDeviceMobile size={36} />
          </div>
          <Text>Easy to use: insert, configure and go.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

Banner.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('banner')(Banner);

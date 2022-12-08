import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Menu } from '@mantine/core';
import { IconWorld } from '@tabler/icons';

import { i18n } from 'utils/with-i18next';

export function SelectLanguages({ t }) {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <Button variant="subtle" leftIcon={<IconWorld />}>
          {t(`languages.${language}`)}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Languages</Menu.Label>
        <Menu.Item onClick={() => setLanguage('en')}>{t('languages.en')}</Menu.Item>
        <Menu.Item onClick={() => setLanguage('es')}>{t('languages.es')}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

SelectLanguages.propTypes = {
  t: PropTypes.func,
};

export default SelectLanguages;

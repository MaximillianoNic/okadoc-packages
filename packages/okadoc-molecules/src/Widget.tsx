import React, { FC } from 'react';
import { Heading, Button } from '@okadoc/ui-atom';

import "./styles.module.scss"

export const Widget: FC<{}> = () => (
  <div className='widget'>
    <Heading>Test</Heading>
    <Button variant='primary-green'>Button Primary</Button>
  </div>
);

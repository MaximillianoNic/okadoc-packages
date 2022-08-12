import React, { FC } from 'react';
import { Heading, Button } from '@okadoc/ui-atom';

export const Widget: FC<{}> = () => (
  <div>
    <Heading>Test</Heading>
    <Button variant='primary-green'>Button Primary</Button>
  </div>
);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Box } from '@fower/react';
import { Avatar } from '@bone-ui/avatar';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@bone-ui/alert'
import { CloseButton } from '@bone-ui/close-button'
import { Badge } from '@bone-ui/badge'


const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  Box,
  Avatar,
  Alert, AlertIcon, AlertTitle, AlertDescription,
  CloseButton,
  Badge,
};

export default ReactLiveScope;

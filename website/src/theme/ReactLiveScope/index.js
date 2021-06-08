/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Box } from '@fower/react';
import { DownloadOutline } from '@bone-ui/icons/lib/DownloadOutline'
import { ArrowRightOutline } from '@bone-ui/icons/lib/ArrowRightOutline'
import { MailSolid } from '@bone-ui/icons/lib/MailSolid'
import SunOutline from '@bone-ui/icons/lib/SunOutline'
import CashOutline from '@bone-ui/icons/lib/CashOutline'
import { Avatar } from '@bone-ui/avatar';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@bone-ui/alert'
import { CloseButton } from '@bone-ui/close-button'
import { Badge } from '@bone-ui/badge'
import { Button } from '@bone-ui/button'
import { Card } from '@bone-ui/card'
import { Divider, DividerTitle } from '@bone-ui/divider'
import { Tag } from '@bone-ui/tag'
import { Spinner } from '@bone-ui/spinner'
import { Dot } from '@bone-ui/dot'


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
  DownloadOutline,
  ArrowRightOutline,
  MailSolid,
  SunOutline,
  CashOutline,
  Box,
  Avatar,
  Alert, AlertIcon, AlertTitle, AlertDescription,
  CloseButton,
  Badge,
  Button,
  Card,
  Divider,
  DividerTitle,
  Tag,
  Spinner,
  Dot,
};

export default ReactLiveScope;

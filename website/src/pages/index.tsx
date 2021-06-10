import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import { Box } from '@fower/react'
import { Input, InputGroup, InputElement } from '@bone-ui/input'
import { SearchOutline } from '@bone-ui/icons/lib/SearchOutline'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { ComponentList } from '../components/ComponentList'
import { ModeToggle } from '../components/ModeToggle'
import { Tag } from '@bone-ui/tag'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Box bgGray100--L4 flex-1 transitionColors>
      <ModeToggle></ModeToggle>
      <Box column toCenter pt10 pb4>
        <Box toCenterY spaceX2>
          <Box text4XL black fontBold>
            Bone UI
          </Box>
          <Tag variant="light">v0.4.0</Tag>
        </Box>
        <Box fontLight gray800>
          A high customizable component library for React
        </Box>
      </Box>
      <Box toCenter>
        <InputGroup w-460 shadowSM roundedXL>
          <Input roundedXL size={60} placeholder="find somethings" />
          <InputElement>
            <SearchOutline black />
          </InputElement>
        </InputGroup>
      </Box>
      <ComponentList></ComponentList>
    </Box>
  )
}

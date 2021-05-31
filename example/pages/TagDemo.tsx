import React from 'react'
import { Tag } from '@bone-ui/tag'
import { Box } from '@fower/react'
import MailOutline from '@bone-ui/icons/lib/MailOutline'
import LocationMarkerOutline from '@bone-ui/icons/lib/LocationMarkerOutline'
import { Avatar } from '@bone-ui/avatar'

export default function TagDemo() {
  return (
    <Box p10>
      <Box spaceX-10 toLeft>
        <Tag>Red</Tag>
        <Tag icon={<MailOutline></MailOutline>}>Red</Tag>
        <Tag icon={<LocationMarkerOutline></LocationMarkerOutline>}>Red</Tag>

        <Tag variant="outline">Green</Tag>

        <Tag variant="outline" icon={<MailOutline></MailOutline>}>
          标签
        </Tag>

        <Tag colorScheme="orange400">Red</Tag>

        <Tag colorScheme="red400">Red</Tag>

        <Tag colorScheme="red400" size="lg">
          <Avatar bgOrange300 name="tr" size={18}></Avatar>
          Red
        </Tag>
      </Box>

      <h1>Size</h1>

      <Box spaceX-10 toLeft>
        <Tag icon={<LocationMarkerOutline></LocationMarkerOutline>}>Red</Tag>

        <Tag size="sm" icon={<MailOutline></MailOutline>}>
          Red
        </Tag>
        <Tag size="md" icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size="lg" icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size={48} icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>

        <Tag size={56} icon={<LocationMarkerOutline></LocationMarkerOutline>}>
          Red
        </Tag>
      </Box>
    </Box>
  )
}

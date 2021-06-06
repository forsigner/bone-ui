import { Box } from '@fower/react'
import { Tag } from '@bone-ui/tag'
import { ArrowRightOutline } from '@bone-ui/icons/lib/ArrowRightOutline'
import { MailSolid } from '@bone-ui/icons/lib/MailSolid'
import { CloseButton } from '@bone-ui/close-button'

export default function TagDemo() {
  return (
    <Box p20 spaceY4>
      <Box as="h2">Default</Box>

      <Box toCenterY spaceX4>
        <Tag>Sample Tag</Tag>
      </Box>

      <Box as="h2">Sizes</Box>

      <Box toCenterY spaceX4>
        <Tag size="sm">Small</Tag>
        <Tag size="md">Middle</Tag>
        <Tag size="lg">Large</Tag>
        <Tag size={48}>Size 48</Tag>
        <Tag size={64}>Size 64</Tag>
      </Box>

      <Box as="h2">Color Scheme</Box>
      <Box toCenterY space4 flexWrap="wrap">
        <Tag>Default</Tag>
        <Tag colorScheme="gray500">gray500</Tag>
        <Tag colorScheme="red500">red500</Tag>
        <Tag colorScheme="yellow500">yellow500</Tag>
        <Tag colorScheme="orange500">orange500</Tag>
        <Tag colorScheme="pink500">pink500</Tag>
        <Tag colorScheme="green500">green500</Tag>
        <Tag colorScheme="purple400">purple400</Tag>
        <Tag colorScheme="indigo400">indigo400</Tag>
        <Tag colorScheme="black">Black</Tag>
      </Box>

      <Box as="h2">Light</Box>
      <Box row space-20 flexWrap="wrap">
        <Tag variant="light" colorScheme="red500">
          red500
        </Tag>

        <Tag variant="light" colorScheme="teal500">
          teal500
        </Tag>

        <Tag variant="light" colorScheme="green600">
          green600
        </Tag>

        <Tag variant="light" colorScheme="green700">
          green700
        </Tag>
        <Tag variant="light" colorScheme="yellow500">
          yellow500
        </Tag>

        <Tag variant="light" colorScheme="gray700">
          gray800
        </Tag>
      </Box>

      <Box as="h2">Outline</Box>
      <Box row space-20 flexWrap="wrap">
        <Tag variant="outline" colorScheme="gray500">
          gray500
        </Tag>
        <Tag variant="outline" colorScheme="red500">
          red500
        </Tag>
        <Tag variant="outline" colorScheme="yellow500">
          yellow500
        </Tag>
        <Tag variant="outline" colorScheme="orange500">
          orange500
        </Tag>
        <Tag variant="outline" colorScheme="pink500">
          pink500
        </Tag>
        <Tag variant="outline" colorScheme="green500">
          green500
        </Tag>
        <Tag variant="outline" colorScheme="blue500">
          blue500
        </Tag>
        <Tag variant="outline" colorScheme="purple500">
          purple500
        </Tag>
        <Tag variant="outline" colorScheme="indigo500">
          indigo500
        </Tag>
        <Tag variant="outline" colorScheme="black">
          Black
        </Tag>

        <Tag variant="outline" colorScheme="green500" borderDashed>
          green500
        </Tag>

        <Tag variant="outline" colorScheme="green500" borderDotted>
          green500
        </Tag>
      </Box>

      <Box as="h2">With icon</Box>

      <Box row spaceX-20>
        <Tag icon={<MailSolid />}>Sample Tag</Tag>
        <Tag icon={<ArrowRightOutline />}>Sample Tag</Tag>
      </Box>

      <Box as="h2">With close button</Box>

      <Box row spaceX-20>
        <Tag spaceX1>
          <Box>Closable</Box>
          <CloseButton size={16} gray100 roundedFull bgBlack--T92 />
        </Tag>
      </Box>
    </Box>
  )
}

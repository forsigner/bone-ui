import React from 'react'
import { Box, Heading } from '@styli/react'
import { Button } from '@bone-ui/Button'
import { DownloadOutline, MailSolid, ArrowRightOutline } from '@bone-ui/icons'

export default function ButtonDemo() {
  return (
    <Box>
      <Heading>Size</Heading>
      <Box row space-20 wrap>
        <Button size="xs">Xsmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Middle</Button>
        <Button leftIcon={<MailSolid />} size="lg">
          Large
        </Button>
        <Button leftIcon={<MailSolid />} size={60}>
          Size 60
        </Button>
        <Button leftIcon={<MailSolid />} size={80}>
          Size 80
        </Button>
        <Button leftIcon={<MailSolid />} size={100}>
          Size 100
        </Button>
      </Box>

      <Heading>colorScheme</Heading>
      <Box row space-20 wrap>
        <Button colorScheme="gray40">gray40</Button>
        <Button colorScheme="red40">Red40</Button>
        <Button colorScheme="yellow40">Yello40</Button>
        <Button colorScheme="orange40">orange40</Button>
        <Button colorScheme="pink40">pink40</Button>
        <Button colorScheme="green40">green40</Button>
        <Button colorScheme="blue40">Blue40</Button>
        <Button colorScheme="purple40">purple40</Button>
        <Button colorScheme="indigo40">indigo40</Button>
        <Button colorScheme="black">Black</Button>
      </Box>

      <Heading>Outline</Heading>
      <Box row space-20 wrap>
        <Button variant="outline" colorScheme="gray40">
          gray40
        </Button>
        <Button variant="outline" colorScheme="red40">
          Red40
        </Button>
        <Button variant="outline" colorScheme="yellow40">
          Yello40
        </Button>
        <Button variant="outline" colorScheme="orange40">
          orange40
        </Button>
        <Button variant="outline" colorScheme="pink40">
          pink40
        </Button>
        <Button variant="outline" colorScheme="green40">
          green40
        </Button>
        <Button variant="outline" colorScheme="blue40">
          Blue40
        </Button>
        <Button variant="outline" colorScheme="purple40">
          purple40
        </Button>
        <Button variant="outline" colorScheme="indigo40">
          indigo40
        </Button>
        <Button variant="outline" colorScheme="black">
          Black
        </Button>

        <Button variant="outline" colorScheme="green40" borderDashed>
          green40
        </Button>

        <Button variant="outline" colorScheme="green40" borderDotted>
          green40
        </Button>

        <Button variant="outline" colorScheme="green40" borderStyle="groove">
          green40
        </Button>

        <Button variant="outline" colorScheme="green40" borderStyle="dashed">
          green40
        </Button>

        <Button variant="outline" colorScheme="green40" borderNone>
          Text
        </Button>

        <Button
          variant="outline"
          href="https://github.com"
          target="_blank"
          as="a"
          colorScheme="green40"
          borderNone
        >
          Link
        </Button>
      </Box>

      <Heading>colorMode</Heading>
      <Box row space-20 wrap>
        <Button colorMode="light" colorScheme="gray40">
          gray40
        </Button>
        <Button colorMode="light" colorScheme="red40">
          Red40
        </Button>
        <Button colorMode="light" colorScheme="yellow40">
          Yello40
        </Button>
        <Button colorMode="light" colorScheme="orange40">
          orange40
        </Button>
        <Button colorMode="light" colorScheme="pink40">
          pink40
        </Button>
        <Button colorMode="light" colorScheme="green40">
          green40
        </Button>
        <Button colorMode="light" colorScheme="blue40">
          Blue40
        </Button>
        <Button colorMode="light" colorScheme="purple40">
          purple40
        </Button>
        <Button colorMode="light" colorScheme="indigo40">
          indigo40
        </Button>

        <Button disabled colorMode="light" colorScheme="indigo40">
          indigo40
        </Button>

        <Button loading colorMode="light" colorScheme="purple40">
          purple40
        </Button>

        <Button loading colorMode="light" colorScheme="indigo40">
          indigo40
        </Button>
      </Box>

      <Heading>disabled</Heading>

      <Box row space-20 wrap>
        <Button disabled colorScheme="gray40">
          gray40
        </Button>
        <Button disabled colorScheme="red40">
          Red40
        </Button>
        <Button disabled colorScheme="yellow40">
          Yello40
        </Button>
        <Button disabled colorScheme="orange40">
          orange40
        </Button>
        <Button disabled colorScheme="pink40">
          pink40
        </Button>
        <Button disabled colorScheme="green40">
          green40
        </Button>
        <Button disabled colorScheme="blue40">
          Blue40
        </Button>
        <Button disabled colorScheme="purple40">
          purple40
        </Button>
        <Button disabled colorScheme="indigo40">
          indigo40
        </Button>
      </Box>

      <Heading>Loading</Heading>

      <Box row space-20 wrap>
        <Button loading size="xs">
          Xsmall
        </Button>

        <Button loading size="sm">
          Small
        </Button>
        <Button loading>Submitting...</Button>
        <Button variant="outline" loading>
          Submitting...
        </Button>

        <Button variant="outline" colorScheme="black" loading>
          Submitting...
        </Button>

        <Button loading size="lg">
          Large
        </Button>
        <Button loading size={60}>
          Size 60
        </Button>
      </Box>

      <Heading>Block</Heading>
      <Box spaceY-20>
        <Button variant="outline" w-100p>
          Outline
        </Button>
        <Button variant="solid" w-100p>
          Solid
        </Button>
      </Box>

      <Heading>with icon</Heading>

      <Box row spaceX-20>
        <Button leftIcon={<DownloadOutline />}>LeftIcon</Button>
        <Button leftIcon={<MailSolid />}>RightIcon</Button>
        <Button leftIcon={<DownloadOutline />}>With icon</Button>
        <Button rightIcon={<ArrowRightOutline />}>RightIcon</Button>
      </Box>

      <Heading>Icon</Heading>

      <Box row spaceX-20>
        <Button icon={<MailSolid />} rounded-0 />
        <Button icon={<DownloadOutline />} />
        <Button icon={<ArrowRightOutline />} rounded-10 />
        <Button icon={<MailSolid />} rounded-9999 />

        <Button variant="outline" icon={<MailSolid />} rounded-0 />
        <Button variant="outline" icon={<DownloadOutline />} />
        <Button variant="outline" icon={<ArrowRightOutline />} rounded-10 borderDashed />
        <Button variant="outline" icon={<MailSolid />} rounded-9999 />

        <Button colorMode="light" variant="outline" icon={<MailSolid />} rounded-0 />
        <Button colorMode="light" variant="outline" icon={<DownloadOutline />} />
        <Button
          colorMode="light"
          variant="outline"
          icon={<ArrowRightOutline />}
          rounded-10
          borderDashed
        />
        <Button colorMode="light" variant="outline" icon={<MailSolid />} rounded-9999 />

        <Button colorMode="light" icon={<MailSolid />} rounded-0 />
        <Button colorMode="light" icon={<DownloadOutline />} />
        <Button colorMode="light" icon={<ArrowRightOutline />} rounded-10 />
        <Button colorMode="light" icon={<MailSolid />} rounded-9999 />
      </Box>
    </Box>
  )
}

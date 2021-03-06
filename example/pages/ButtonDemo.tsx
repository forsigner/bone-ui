import { Box } from '@fower/react'
import { Button } from '@bone-ui/button'
import { DownloadOutline } from '@bone-ui/icons/lib/DownloadOutline'
import { ArrowRightOutline } from '@bone-ui/icons/lib/ArrowRightOutline'
import { MailSolid } from '@bone-ui/icons/lib/MailSolid'

export default function ButtonDemo() {
  return (
    <Box p20 spaceY4>
      <Box as="h2">Default</Box>

      <Box toCenterY spaceX4>
        <Button>Button</Button>
      </Box>

      <Box as="h2">Sizes</Box>

      <Box toCenterY spaceX4>
        <Button size="sm">Small</Button>
        <Button size="md">Middle</Button>
        <Button size="lg">Large</Button>
        <Button size={60}>Size 60</Button>
        <Button size={80}>Size 80</Button>
      </Box>

      <Box as="h2">Color Scheme</Box>
      <Box toCenterY spaceX4 flexWrap="wrap">
        <Button>Default</Button>
        <Button colorScheme="gray500">gray500</Button>
        <Button colorScheme="red500">red500</Button>
        <Button colorScheme="yellow500">yellow500</Button>
        <Button colorScheme="orange500">orange500</Button>
        <Button colorScheme="pink500">pink500</Button>
        <Button colorScheme="green500">green500</Button>
        <Button colorScheme="purple400">purple400</Button>
        <Button colorScheme="indigo400">indigo400</Button>
        <Button colorScheme="black">Black</Button>
      </Box>

      <Box as="h2">Light</Box>
      <Box row space-20 flexWrap="wrap">
        <Button variant="light" colorScheme="red500">
          red500
        </Button>

        <Button variant="light" colorScheme="teal500">
          teal500
        </Button>

        <Button variant="light" colorScheme="green600">
          green600
        </Button>

        <Button variant="light" colorScheme="green700">
          green700
        </Button>
        <Button variant="light" colorScheme="yellow500">
          yellow500
        </Button>

        <Button variant="light" colorScheme="gray700">
          gray800
        </Button>
      </Box>

      <Box as="h2">ghost</Box>
      <Box row space-20 flexWrap="wrap">
        <Button variant="ghost" colorScheme="red500">
          red500
        </Button>
        <Button variant="ghost" colorScheme="yellow500">
          yellow500
        </Button>
        <Button variant="ghost" colorScheme="orange500">
          orange500
        </Button>
        <Button variant="ghost" colorScheme="pink500">
          pink500
        </Button>
        <Button variant="ghost" colorScheme="green500">
          green500
        </Button>
        <Button variant="ghost" colorScheme="blue500">
          blue500
        </Button>
        <Button variant="ghost" colorScheme="purple500">
          purple500
        </Button>
        <Button variant="ghost" colorScheme="indigo500">
          indigo500
        </Button>
      </Box>

      <Box as="h2">Outline</Box>
      <Box row space-20 flexWrap="wrap">
        <Button variant="outline" colorScheme="gray500">
          gray500
        </Button>
        <Button variant="outline" colorScheme="red500">
          red500
        </Button>
        <Button variant="outline" colorScheme="yellow500">
          yellow500
        </Button>
        <Button variant="outline" colorScheme="orange500">
          orange500
        </Button>
        <Button variant="outline" colorScheme="pink500">
          pink500
        </Button>
        <Button variant="outline" colorScheme="green500">
          green500
        </Button>
        <Button variant="outline" colorScheme="blue500">
          blue500
        </Button>
        <Button variant="outline" colorScheme="purple500">
          purple500
        </Button>
        <Button variant="outline" colorScheme="indigo500">
          indigo500
        </Button>
        <Button variant="outline" colorScheme="black">
          Black
        </Button>

        <Button variant="outline" colorScheme="green500" borderDashed>
          green500
        </Button>

        <Button variant="outline" colorScheme="green500" borderDotted>
          green500
        </Button>

        <Button variant="outline" colorScheme="green500" borderStyle="groove">
          green500
        </Button>

        <Button variant="outline" colorScheme="green500" borderStyle="dashed">
          green500
        </Button>

        <Button variant="outline" colorScheme="green500" borderNone>
          Text
        </Button>

        <Button
          variant="outline"
          href="https://github.com"
          target="_blank"
          as="a"
          colorScheme="green500"
          borderNone
        >
          Link
        </Button>
      </Box>

      <Box as="h2">disabled</Box>

      <Box row space-20 flexWrap="wrap">
        <Button disabled>Default</Button>
        <Button disabled colorScheme="gray500">
          gray500
        </Button>
        <Button disabled colorScheme="red500" variant="outline">
          red500
        </Button>
        <Button disabled variant="light" colorScheme="teal500">
          teal500
        </Button>

        <Button disabled variant="ghost" colorScheme="purple500">
          purple500
        </Button>

        <Button disabled icon={<DownloadOutline />} />
      </Box>

      <Box as="h2">Loading</Box>

      <Box row space-20 flexWrap="wrap">
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

      <Box as="h2">Block</Box>
      <Box spaceY-20>
        <Button w-100p>Default</Button>
        <Button variant="outline" w-100p>
          Outline
        </Button>
        <Button variant="light" w-100p>
          Light
        </Button>
        <Button variant="ghost" w-100p>
          Ghost
        </Button>
      </Box>

      <Box as="h2">with icon</Box>

      <Box row spaceX-20>
        <Button leftIcon={<DownloadOutline />}>LeftIcon</Button>
        <Button leftIcon={<MailSolid />}>RightIcon</Button>
        <Button leftIcon={<DownloadOutline />}>With icon</Button>
        <Button rightIcon={<ArrowRightOutline />}>RightIcon</Button>
      </Box>

      <Box as="h2">Icon</Box>

      <Box row spaceX-20>
        <Button icon={<MailSolid />} rounded-0 />
        <Button icon={<DownloadOutline />} />
        <Button icon={<ArrowRightOutline />} rounded-10 />
        <Button icon={<MailSolid />} rounded-9999 />

        <Button variant="outline" icon={<MailSolid />} rounded-0 />
        <Button variant="outline" icon={<DownloadOutline />} />
        <Button variant="outline" icon={<ArrowRightOutline />} rounded-10 borderDashed />
        <Button variant="outline" icon={<MailSolid />} rounded-9999 />

        <Button variant="light" icon={<MailSolid />} rounded-0 />
        <Button variant="light" icon={<DownloadOutline />} />
        <Button variant="light" icon={<ArrowRightOutline />} rounded-10 borderDashed />
        <Button variant="light" icon={<MailSolid />} rounded-9999 />

        <Button variant="ghost" icon={<MailSolid />} rounded-0 />
        <Button variant="ghost" icon={<DownloadOutline />} />
        <Button variant="ghost" icon={<ArrowRightOutline />} rounded-10 borderDashed />
        <Button variant="ghost" icon={<MailSolid />} rounded-9999 />
      </Box>
    </Box>
  )
}

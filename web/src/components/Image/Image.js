import { Box, Image as ChakraImage } from '@chakra-ui/core'

const Image = ({ img, i }) => {
  return (
    <Box
      key={img.id}
      pos="relative"
      gridColumn={i % 5 === 0 || i % 6 === 0 ? 'span 2' : null}
      gridRow={i % 5 === 0 ? 'span 2' : null}
    >
      <ChakraImage src={img.url} objectFit="cover" size="100%" />
    </Box>
  )
}

export default Image

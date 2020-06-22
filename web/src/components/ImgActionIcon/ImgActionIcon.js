import { IconButton } from '@chakra-ui/core'

const ImgActionIcon = (props) => {
  return (
    <IconButton
      size="sm"
      variant="unstyled"
      fontSize="2rem"
      pos="absolute"
      top="5"
      cursor="pointer"
      _focus=""
      {...props}
    />
  )
}

export default ImgActionIcon

import { IconButton } from '@chakra-ui/core'

const ImgActionIcon = (props) => {
  return (
    <IconButton
      variant="unstyled"
      fontSize="1.8rem"
      pos="absolute"
      top="5"
      cursor="pointer"
      {...props}
    />
  )
}

export default ImgActionIcon

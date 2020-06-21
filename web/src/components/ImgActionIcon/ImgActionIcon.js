import { IconButton } from '@chakra-ui/core'

const ImgActionIcon = (props) => {
  return (
    <IconButton
      size="sm"
      variant="ghost"
      fontSize="2rem"
      pos="absolute"
      top="5"
      cursor="pointer"
      {...props}
    />
  )
}

export default ImgActionIcon

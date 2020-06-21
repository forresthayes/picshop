import ImgActionIcon from 'src/components/ImgActionIcon'
import { Box, Image as ChakraImage } from '@chakra-ui/core'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiAddCircleLine } from 'react-icons/ri'

import { Context } from 'src/context'

const Image = ({ img, i }) => {
  const [hovered, setHovered] = React.useState(false)
  const { toggleFavorite, addToCart } = React.useContext(Context)

  function heartIcon() {
    const props = {}
    if (img.isFavorite) {
      props.icon = AiFillHeart
      props.araiLabel = 'Unfavorite'
    } else if (hovered) {
      props.icon = AiOutlineHeart
      props.araiaLabel = 'Mark as favorite'
    }

    return (
      <ImgActionIcon
        color="#EA453C"
        left="5"
        onClick={() => toggleFavorite(img.id)}
        {...props}
      />
    )
  }

  const addIcon = hovered && (
    <ImgActionIcon
      ariaLabel="Add to Cart"
      icon={RiAddCircleLine}
      color="#43E2FE"
      right="5"
      onClick={() => addToCart(img)}
    />
  )

  return (
    <Box
      key={img.id}
      pos="relative"
      gridColumn={i % 5 === 0 || i % 6 === 0 ? 'span 2' : null}
      gridRow={i % 5 === 0 ? 'span 2' : null}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChakraImage src={img.url} objectFit="cover" size="100%" />
      {heartIcon()}
      {addIcon}
    </Box>
  )
}

export default Image

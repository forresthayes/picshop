import ImgActionIcon from 'src/components/ImgActionIcon'
import { Box, Image as ChakraImage } from '@chakra-ui/core'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiAddCircleLine } from 'react-icons/ri'
import { FaCheckCircle } from 'react-icons/fa'

import { Context } from 'src/context'

const Image = ({ img, i }) => {
  const [hovered, setHovered] = React.useState(false)
  const {
    toggleFavorite,
    addToCart,
    removeFromCart,
    cartItems,
  } = React.useContext(Context)

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
        color="tomato"
        left="5"
        onClick={() => toggleFavorite(img.id)}
        {...props}
      />
    )
  }

  function addIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id)
    const props = {}

    if (alreadyInCart) {
      props.icon = FaCheckCircle
      props.ariaLabel = 'Remove from cart'
      props.onClick = () => removeFromCart(img.id)
    } else if (hovered) {
      props.icon = RiAddCircleLine
      props.arialabel = 'Add to cart'
      props.onClick = () => addToCart(img)
    }

    return <ImgActionIcon color="#43E2FE" right="5" {...props} />
  }

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
      {addIcon()}
    </Box>
  )
}

export default Image

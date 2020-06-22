import { Flex, IconButton, Image, Text } from '@chakra-ui/core'

import { Context } from 'src/context'

const CartItem = ({ item }) => {
  const { removeFromCart } = React.useContext(Context)

  return (
    <Flex isInline align="center" my="30px">
      <IconButton
        aria-label="Remove item"
        icon="delete"
        variant="outline"
        size="md"
        onClick={() => removeFromCart(item.id)}
      />
      <Image
        src={item.url}
        size="175px"
        objectFit="cover"
        mr="auto"
        ml="20px"
      />
      <Text justifySelf="flex-end" fontWeight="bold" fontSize="xl">
        $5.99
      </Text>
    </Flex>
  )
}

export default CartItem

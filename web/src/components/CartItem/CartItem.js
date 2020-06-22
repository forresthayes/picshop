import { Flex, IconButton, Image, Text } from '@chakra-ui/core'

const CartItem = ({ item }) => {
  return (
    <Flex isInline align="center" my="30px">
      <IconButton
        aria-label="Remove item"
        icon="delete"
        variant="outline"
        size="md"
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

//   .cart - item {
//   justify - content: space - between;
//   align - items: center;
//   margin: 20px 0;
// }

// .cart - item img {
//   margin - right: auto;
//   margin - left: 10px;
// }

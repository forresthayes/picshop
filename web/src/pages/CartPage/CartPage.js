import AppLayout from 'src/layouts/AppLayout'
import CartItem from 'src/components/CartItem'
import { Flex, Box, Text, Heading, Button } from '@chakra-ui/core'

import { Context } from 'src/context'

const CartPage = () => {
  const { cartItems } = React.useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  return (
    <AppLayout>
      <Box as="main" p="10px" my="1.5rem" mx="auto" width={['100%', 0.55]}>
        <Heading textAlign="center" size="2xl">
          Check out
        </Heading>

        {cartItemElements}
        <Text fontWeight="bold" textAlign="right" fontSize="xl" mt="3rem">
          Total: {totalCostDisplay}
        </Text>
        <Flex justify="center">
          <Button variant="solid" variantColor="cyan" size="lg">
            Place Order
          </Button>
        </Flex>
      </Box>
    </AppLayout>
  )
}

export default CartPage

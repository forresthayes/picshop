import AppLayout from 'src/layouts/AppLayout'
import CartItem from 'src/components/CartItem'
import { navigate, routes } from '@redwoodjs/router'
import {
  Flex,
  Box,
  Text,
  Stack,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/core'

import { Context } from 'src/context'

const CartPage = () => {
  const { cartItems, emptyCart } = React.useContext(Context)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const toast = useToast()

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setIsSubmitting(true)
    setTimeout(() => {
      toast({
        title: 'Order placed',
        description: 'Thank you for your order.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setIsSubmitting(false)
      emptyCart()
    }, 3000)
  }

  return (
    <AppLayout>
      <Box as="main" p="10px" my="1.5rem" mx="auto" width={['100%', 0.55]}>
        <Heading textAlign="center" size="2xl">
          Check out
        </Heading>

        {cartItemElements}
        {cartItems.length > 0 ? (
          <>
            <Text fontWeight="bold" textAlign="right" fontSize="xl" mt="3rem">
              Total: {totalCostDisplay}
            </Text>
            <Flex justify="center">
              <Button
                isLoading={isSubmitting}
                loadingText="Submitting"
                variant="solid"
                variantColor="cyan"
                size="lg"
                onClick={placeOrder}
              >
                Place Order
              </Button>
            </Flex>
          </>
        ) : (
          <Stack align="center" mt="10px">
            <Text textAlign="center" mt="1rem">
              You have no items in your cart.
            </Text>
            <Button
              variant="solid"
              variantColor="cyan"
              onClick={() => navigate(routes.home())}
            >
              Pic Some!
            </Button>
          </Stack>
        )}
      </Box>
    </AppLayout>
  )
}

export default CartPage

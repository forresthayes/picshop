import { navigate, Link as RwLink, routes } from '@redwoodjs/router'
import { Box, Link, Flex, Heading, IconButton } from '@chakra-ui/core'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsCamera } from 'react-icons/bs'

import { Context } from 'src/context'

import RiShoppingCartFill from './shopping-cart-fill.svg'

const AppLayout = ({ children }) => {
  const { cartItems } = React.useContext(Context)
  const cartIcon =
    cartItems.length > 0 ? RiShoppingCartFill : RiShoppingCartLine

  return (
    <>
      <Flex
        as="nav"
        align="center"
        bg="tomato"
        justify="space-between"
        color="white"
        wrap="wrap"
        padding="1.5rem"
        boxShadow="0px 2px 10px -5px rgba(21,6,5,1)"
      >
        <Flex align="center">
          <Heading as="h1" size="xl">
            <Flex
              justify="space-between"
              align="center"
              cursor="pointer"
              onClick={() => navigate(routes.home())}
            >
              <Box as={BsCamera} mr="0.4rem" />
              Take Your Pic
            </Flex>
          </Heading>
        </Flex>
        <Link as={RwLink} to={routes.cart()}>
          <IconButton
            variant="unstyled"
            fontSize={32}
            aria-label="View Cart"
            icon={cartIcon}
            _focus=""
          />
        </Link>
      </Flex>
      <main>{children}</main>
    </>
  )
}

export default AppLayout

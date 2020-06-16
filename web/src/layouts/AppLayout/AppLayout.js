import { Link as RwLink, routes } from '@redwoodjs/router'
import { Box, Link, Flex, Heading, IconButton } from '@chakra-ui/core'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsCamera } from 'react-icons/bs'

const AppLayout = ({ children }) => {
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
      >
        <Flex align="center">
          <Heading as="h1" size="xl">
            <Link as={RwLink} to={routes.home()}>
              <Flex justify="space-between" align="center">
                <Box as={BsCamera} mr="0.4rem" />
                Pic
              </Flex>
            </Link>
          </Heading>
        </Flex>
        <Link as={RwLink} to={routes.cart()}>
          <IconButton
            variant="ghost"
            fontSize="32px"
            aria-label="View Cart"
            icon={RiShoppingCartLine}
          />
        </Link>
      </Flex>
      <main>{children}</main>
    </>
  )
}

export default AppLayout

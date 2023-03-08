import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SizeExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen()
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        onClick={() => handleClick()}
        key="full"
        background="none"
        padding={6}
        color="#FFFFFF"
      >
        <HamburgerIcon boxSize={6} />
      </Button>

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size="full"
        closeOnOverlayClick
        onOverlayClick={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton padding={6} />
          <DrawerHeader backgroundColor="#232323"></DrawerHeader>
          <DrawerBody backgroundColor="#232323">
            <Box
              display="flex"
              flexDirection="column"
              height="30%"
              justifyContent="space-evenly"
            >
              <Link to="/" onClick={onClose}>
                HOME
              </Link>
              <Link color="#1f1f1f" to="/about" onClick={onClose}>
                ABOUT
              </Link>
              <Link color="#FFFFFF" to="/projects" onClick={onClose}>
                PROJECTS
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default SizeExample

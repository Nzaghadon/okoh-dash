"use client";

import { Props } from "@/app/providers";
import {
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  AppShell,
  Navbar,
  NavbarBrand,
  NavGroup,
  NavItem,
  PersonaAvatar,
  Sidebar,
  SidebarOverlay,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/react";
import Image from "next/image";

import Logo from "/public/logo.jpeg";
import {
  FiBarChart,
  FiHome,
  FiList,
  FiMoon,
  FiSettings,
  FiShoppingBag,
  FiSun,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";
import { prisma } from "@/lib/db";

export const SidebarLayout = ({ children }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <AppShell
      height="$100vh"
      fontSize="md"
      variant="static"
      navbar={
        <Navbar position={"sticky"}>
          <NavbarBrand>
            <Image src={Logo} alt="Logo" width={50} />
          </NavbarBrand>
        </Navbar>
      }
      sidebar={
        <Sidebar width="25%" bg="gray.100" toggleBreakpoint="xl">
          <SidebarToggleButton />
          <SidebarSection direction="row">
            {/* <Image src={Logo} width="100" alt="Logo" /> */}
            <Text fontSize={"xl"}>Okoh Furnitures</Text>
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <PersonaAvatar presence="online" size="sm" name="John Doe" />
                }
                variant="ghost"
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto">
            <Link href={"/dashboard"}>
              <NavItem icon={<FiHome size="2.1rem" />}>Dashboard</NavItem>
            </Link>

            <Link href={"/products"}>
              <NavItem icon={<FiList size="2.1rem" />}>Product List</NavItem>
            </Link>
            <Link href={"/product-details"}>
              <NavItem icon={<FiBarChart size="2.1rem" />}>
                Product Details
              </NavItem>
            </Link>
            <Link href={"/add-product"}>
              <NavItem icon={<FiSettings size="2.1rem" />}>Add Product</NavItem>
            </Link>

            <Link href={"/customers"}>
              <NavItem icon={<FiUsers size={"2.1rem"} />}>
                Customer List
              </NavItem>
            </Link>
          </SidebarSection>
          <SidebarSection alignItems={"flex-start"}>
            <IconButton
              icon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
            />
          </SidebarSection>
          <SidebarOverlay />
        </Sidebar>
      }
    >
      <Box as="main" overflow="auto" py="6" px="8" fontSize="md">
        {children}
      </Box>
    </AppShell>
  );
};

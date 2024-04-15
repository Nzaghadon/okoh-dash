"use client";
import { IProducts } from "@/lib/types/product";
import { nairaCurrencyFormatter } from "@/lib/utils";
import { useCart } from "@/store/cart-store";
import {
  Box,
  Button,
  Card,
  CardBody,
  Collapse,
  Divider,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdStarRate } from "react-icons/md";

type props = {
  product: IProducts;
};

const ProductDetails: FC<props> = ({ product }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [state, actions] = useCart();
  return (
    <Box overflowX={"auto"}>
      <Heading as={"h2"} size={"2xl"} noOfLines={1}>
        Product Details
      </Heading>
      <Card direction={"row"} overflow={"hidden"}>
        <Box p={4}>
          <Image
            src={`${product.image}`}
            alt={product.name}
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            borderRadius={"7px"}
          />
        </Box>
        <Stack width={"full"}>
          <CardBody>
            <Heading size={"lg"}>Perfect Couch</Heading>
            <Text>
              {product.rating} <MdStarRate style={{ color: "purple" }} />{" "}
              customer reviews
            </Text>
            <Divider py={4} />
            <Box py={4}>
              <Text fontSize={"large"} fontWeight={"bold"}>
                {nairaCurrencyFormatter(product.price)}
              </Text>
              <Text>inclusive of all taxes</Text>
            </Box>
            <Stack direction={"row"} spacing={4} position={"relative"} py={4}>
              <Button
                colorScheme="teal"
                w={"full"}
                size={"md"}
                onClick={() => actions.addToCart(product)}
              >
                Add To Cart
              </Button>
              <Button
                colorScheme="teal"
                variant={"outline"}
                w={"full"}
                size={"md"}
              >
                Wishlist
              </Button>
            </Stack>
            <Divider />
            <Stack spacing={4}>
              <Box>
                <Button onClick={() => onToggle()}>Product Details</Button>
                <Collapse in={isOpen} animateOpacity>
                  <Box>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur, iure veritatis voluptatum nihil impedit
                      eveniet earum ut velit, qui non esse optio fugit veniam
                      iusto expedita recusandae. Magni, ipsum quam?
                    </Text>
                    <Heading as={"h2"} size={"md"}>
                      Features:
                    </Heading>
                    <UnorderedList spacing={2}>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </ListItem>
                      <ListItem>
                        Integer ut justo quis diam finibus lobortis vel at dui.
                      </ListItem>
                      <ListItem>
                        Morbi ultricies leo sit amet nisl suscipit, et vulputate
                        orci fringilla.
                      </ListItem>
                      <ListItem>
                        Nullam sit amet lacus ut nibh pharetra rutrum venenatis
                        ac purus.
                      </ListItem>
                      <ListItem>
                        Sed ut arcu dapibus, viverra ex vitae, fermentum libero.
                      </ListItem>
                      <ListItem>
                        Fusce eget mauris in elit ultricies vehicula.
                      </ListItem>
                      <ListItem>
                        Vivamus tincidunt ligula id sollicitudin finibus.
                      </ListItem>
                      <ListItem>
                        Nullam facilisis enim viverra nulla malesuada consequat.
                      </ListItem>
                      <ListItem>
                        Nullam feugiat turpis ullamcorper augue fringilla, at
                        facilisis magna dignissim.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Collapse>
              </Box>
              <Divider />
              <Box>
                <Button onClick={() => onToggle()}>Free Shipping Policy</Button>
                <Collapse in={isOpen} animateOpacity>
                  <Box>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis eveniet saepe nobis dicta? Provident inventore
                    alias nesciunt sunt aspernatur molestias doloremque magnam
                    corrupti eligendi consequuntur, reprehenderit nobis. Eius,
                    optio numquam!
                  </Box>
                </Collapse>
              </Box>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};

export default ProductDetails;

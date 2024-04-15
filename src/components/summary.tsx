"use client";

import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const Summary = () => {
  return (
    <Box w={"full"} mb={8} fontWeight={"12rem"}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={4}
        width={"full"}
      >
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel mb={2}>Orders</StatLabel>
              <StatNumber>$2,279</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                3.61%
              </StatHelpText>
              <Link href={"#"}>
                <Text fontSize={"lg"} color={"blueviolet"}>
                  View Orders
                </Text>
              </Link>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel mb={2}>Customer</StatLabel>
              <StatNumber>$11,089</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5.93%
              </StatHelpText>
              <Link href={"#"}>
                <Text fontSize={"lg"} color={"blueviolet"}>
                  View Earnings
                </Text>
              </Link>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel mb={2}>Revenue</StatLabel>
              <StatNumber> $12,345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                78%
              </StatHelpText>
              <Link href={"#"}>
                <Text fontSize={"lg"} color={"oldlace"}>
                  All Customers
                </Text>
              </Link>
            </Stat>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardBody>
            <Stat>
              <StatLabel mb={2}>Balance</StatLabel>
              <StatNumber>$6,820</StatNumber>
              <StatHelpText></StatHelpText>
              <Link href={"#"}>
                <Text fontSize={"lg"} color={"blueviolet"}>
                  Withdraw Money
                </Text>
              </Link>
            </Stat>
          </CardBody>
        </GridItem>
      </Grid>
    </Box>
  );
};

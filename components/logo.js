import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import hexagon from "../assets/images/hexagon-light.jpg";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transition-duration: 10s;
    transition-property: width;
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Image src={hexagon} alt="logo" width={90} height={30} />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Victor's Homepage
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;

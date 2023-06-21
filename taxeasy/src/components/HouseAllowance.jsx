import {
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CountUp from 'react-countup';
export const HouseAllowance = ({ settabs }) => {
  const [isError, setisError] = useState({
    error: false,
    name: "",
  });
  const [Exempthra,setExempthra] = useState(1000)
  const [Taxedhra,setTaxedhra] = useState(1000)

  const [value, setValues] = useState({
    salary: 1000,
    DA: 0,
    HRA: 1000,
    Rent: 1000,
    Metro: false,
  });
  const handleInputChange = (e) => {
    if (e === "true" || e === "false") {
      setValues({ ...value, Metro: e });
      return;
    } else {
      setValues({ ...value, [e.target.name]: e.target.value });
    }

    // handling components value

    if (Number(e.target.value) < 1000 && e.target.name==="salary") {
      setisError({
        error: true,
        name: "salary",
      });
    } else if (Number(e.target.value) < 1000 && e.target.name==="HRA") {
      setisError({
        error: true,
        name: "HRA",
      });
    } else if (Number(e.target.value) < 1000 && e.target.name==="Rent") {
      setisError({
        error: true,
        name: "Rent",
      });
    } else {
      setisError({
        error: false,
        name: "",
      });
    }
  };
  const handleCalculateHra = ()=>{
    let min = Infinity
    const basic = (Number(value.Rent))-((Number(value.salary)+Number(value.DA))*10)/100
    const hra = Number(value.HRA)
    const resident = value.Metro==="true" ? ((Number(value.salary)+Number(value.DA))*50)/100 : ((Number(value.salary)+Number(value.DA))*40)/100
    // console.log(basic,hra,resident)
    if(basic>0){
      min = Math.min(min,basic)
    }
    if(hra>0){
      min = Math.min(min,hra)
    }
    if(resident>0){
      min = Math.min(min,resident)
    }
    // console.log(min)
      setExempthra(min)
      setTaxedhra(hra-basic)
  }
  useEffect(()=>{
    if(isError.error===false){
      handleCalculateHra()
    }
  },[value,Exempthra,isError.error])
  // console.log(value)
  return (
    <>
      <BiArrowBack
        cursor={"pointer"}
        fontSize={"30px"}
        onClick={() => settabs("")}
      />
      <Box
        display={"flex"}
        gap={10}
        flexDir={"column"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading>House Allowance Calculator</Heading>
        <form style={{width:"100%",marginTop:"50px"}}>
          <Box display={"flex"}  flexDir={"column"} width={"100%"} gap={5}>
            <FormControl
              isInvalid={isError.error && isError.name === "salary"}
              isRequired
            >
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={"large"}>Basic salary(P.A)</FormLabel>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Input
                    type="number"
                    name="salary"
                    value={value.salary || ""}
                    onChange={handleInputChange}
                  />
                  {isError.error === false ? (
                    <FormHelperText>Enter the salary.</FormHelperText>
                  ) : isError.name === "salary" ? (
                    <FormErrorMessage>Minimum value is 1000.</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={"large"}>
                  Dearness Allowance(P.A)
                </FormLabel>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Input
                    type="number"
                    name="DA"
                    value={value.DA || ""}
                    onChange={handleInputChange}
                  />
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={isError.error && isError.name === "HRA"}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={"large"}>HRA received (P.A).</FormLabel>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Input
                    type="number"
                    value={value.HRA || ""}
                    name="HRA"
                    onChange={handleInputChange}
                  />
                  {isError.error === false ? (
                    <FormHelperText>HRA received (P.A).</FormHelperText>
                  ) : isError.name === "HRA" ? (
                    <FormErrorMessage>Minimum value is 1000.</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={isError.error && isError.name === "Rent"}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={"large"}>Total Rent Paid(P.A).</FormLabel>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                >
                  <Input
                    type="number"
                    value={value.Rent || ""}
                    name="Rent"
                    onChange={handleInputChange}
                  />
                  {isError.error === false ? (
                    <FormHelperText>Total Rent Paid(P.A).</FormHelperText>
                  ) : isError.name === "Rent" ? (
                    <FormErrorMessage>Minimum value is 1000.</FormErrorMessage>
                  ) : (
                    ""
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <FormLabel fontSize={"large"}>
                  Are you living in metro city ?
                </FormLabel>
                <Box width={"40%"}>
                  <RadioGroup
                    defaultValue="false"
                    onChange={handleInputChange}
                  >
                    <HStack
                      spacing="24px"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Radio value="true" >
                        YES
                      </Radio>
                      <Radio value="false">
                        NO
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </Flex>
            </FormControl>
          </Box>
        </form>
        <HStack width={"100%"} bgColor={"#2D3748"} justifyContent={"space-around"} p={10}>
            <VStack>
                <Heading fontSize={"xl"} color={"whiteAlpha.600"}>Exempted HRA</Heading>
                <CountUp start={0} end={Exempthra} prefix="₹" style={{fontSize:"25px",color:"white"}}>
                </CountUp>
            </VStack>
            <VStack>
            <Heading fontSize={"xl"} color={"whiteAlpha.600"}>Taxable HRA</Heading>
            <CountUp start={0} end={Taxedhra} prefix="₹" style={{fontSize:"25px",color:"white"}}>
                </CountUp>
            </VStack>
        </HStack>
      </Box>
    </>
  );
};
